import {vec3, vec2} from 'gl-matrix';
import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Square from './geometry/Square';
import ScreenQuad from './geometry/ScreenQuad';
import LongCube from './geometry/LongCube';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import {setGL, cylinderString} from './globals';
import ShaderProgram, {Shader} from './rendering/gl/ShaderProgram';
import LSystem from './lsystem/LSystem'
import Mesh from './geometry/Mesh';
import TerrainInfo from './TerrainInfo';
import Plane from './geometry/Plane';
import RoadLSystem from './lsystem/RoadLSystem';
import SystemInfoObject from './SystemInfoObject';
var hash = require('object-hash');

let square: Square;
let screenQuad: ScreenQuad;
let time: number = 0.0;
let lsystem: LSystem = new LSystem();
let longCube: LongCube;
let longCube2: LongCube;
let branchCylinder: Mesh;
let skullMesh: Mesh;
let plane: Plane;
let scale: number = 100;
let trInfo: TerrainInfo;
let roadLSystem: RoadLSystem;
let sysInfo: SystemInfoObject = new SystemInfoObject();

function loadScene() {
  square = new Square();
  square.create();
  screenQuad = new ScreenQuad();
  screenQuad.create();
  longCube = new LongCube();
  longCube.create();
  longCube2 = new LongCube();
  longCube2.create();
  branchCylinder = new Mesh(cylinderString, vec3.fromValues(0, 0, 0));
  branchCylinder.create();

  plane = new Plane(vec3.fromValues(0,0,0), vec2.fromValues(scale,scale), 9, trInfo);
  plane.create();
  plane.setNumInstances(1);

  guiChangeCallback(); // lsystem compute here
  updateBuffer();
}

function updateBuffer() {
  let translates: Float32Array = new Float32Array(roadLSystem.roadPosArray);
  let rotQuats: Float32Array = new Float32Array(roadLSystem.roadRotArray);
  let roadLengths: Float32Array = new Float32Array(roadLSystem.roadLenArray);
  let roadWidths: Float32Array = new Float32Array(roadLSystem.roadWidthArray);
  longCube.setInstanceVBOs(translates, rotQuats, roadLengths, roadWidths);
  console.log("translates: " + translates.length);
  console.log("rotQuats: " + rotQuats.length);
  console.log("roadLengths: " + roadLengths.length);
  console.log("roadWidths: " + roadWidths.length);

  longCube.setNumInstances(roadLengths.length);

  let intxnTranslates: Float32Array = new Float32Array(roadLSystem.intxnPosArray);
  let intxnRotQuats: Float32Array = new Float32Array(roadLSystem.intxnRotArray);
  // use the depth position for length
  let intxnLengths: Float32Array = new Float32Array(roadLSystem.intxnLenArray);
  let intxnWidths: Float32Array = new Float32Array(roadLSystem.intxnWidthArray);
  
  longCube2.setInstanceVBOs(intxnTranslates, intxnRotQuats, intxnLengths, intxnWidths);
  console.log("intxnLengths: " + intxnLengths.length);  
  longCube2.setNumInstances(intxnLengths.length);

}

function writeGuiInfo() {
  console.log("controls: " + controls['block max x size']);
  sysInfo.maxXSize = controls['block max x size'];
  sysInfo.maxZSize = controls['block max z size'];
  sysInfo.globalSeed = controls['seed'];
  sysInfo.mapWidthHeightRatio = controls['width height ratio'];
}

function guiChangeCallback() {
  console.log("gui changed!");

  writeGuiInfo();

  trInfo.compute();
  // TODO(zichuanyu) may have more elegant ways?
  plane.create();

  // TODO(zichuanyu) change to road l system
  roadLSystem.compute();
  // TODO(zichuanyu) update this buffer function
  updateBuffer();
}

const controls = {
  'seed': 'seed seed',
  'block max x size': 1,
  'block max z size': 0.8,
  'width height ratio': 1,
};

function main() {
  // Add controls to the gui
  const gui = new DAT.GUI();

  gui.add(controls, 'seed', 'seed').onFinishChange(guiChangeCallback);
  gui.add(controls, 'block max x size', 0, 2).step(0.05).onFinishChange(guiChangeCallback);
  gui.add(controls, 'block max z size', 0, 2).step(0.05).onFinishChange(guiChangeCallback);  
  gui.add(controls, 'width height ratio', 1, 10).step(0.5).onFinishChange(guiChangeCallback);  
  writeGuiInfo();

  trInfo = new TerrainInfo(sysInfo);

  roadLSystem = new RoadLSystem(sysInfo, trInfo);
  roadLSystem.compute();


  // Initial display for framerate
  const stats = Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement); 

  // get canvas and webgl context
  const canvas = <HTMLCanvasElement> document.getElementById('canvas');
  const gl = <WebGL2RenderingContext> canvas.getContext('webgl2');
  if (!gl) {
    alert('WebGL 2 not supported!');
  }
  // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
  // Later, we can import `gl` from `globals.ts` to access it
  setGL(gl);

  // Initial call to load scene
  loadScene();

  const camera = new Camera(vec3.fromValues(10, 0, 10), vec3.fromValues(0, 0, 0));

  const renderer = new OpenGLRenderer(canvas);
  renderer.setClearColor(0.2, 0.2, 0.2, 1);
  // gl.enable(gl.BLEND);
  // gl.blendFunc(gl.ONE, gl.ONE); // Additive blending
  // gl.enable(gl.CULL_FACE);
  // gl.cullFace(gl.BACK);
  gl.enable(gl.DEPTH_TEST);


  const instancedShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/road-instanced-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/instanced-frag.glsl')),
  ]);

  const instancedIntxnShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/intxn-instanced-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/instanced-frag.glsl')),
  ]);

  const flat = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/flat-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/flat-frag.glsl')),
  ]);

  const lambert = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/basic-transform-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/lambert-frag.glsl')),
  ]);

  // This function will be called every frame
  function tick() {
    camera.update();
    // console.log(camera.position);
    // console.log(camera.forward);
    stats.begin();
    lambert.setTime(time);
    instancedShader.setTime(time);
    flat.setTime(time++);
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.clear();
    renderer.render(camera, flat, [screenQuad]);
    renderer.render(camera, lambert, [
      plane,
    ]);

    // road
    renderer.render(camera, instancedShader, [
      longCube,
    ]);

    renderer.render(camera, instancedIntxnShader, [
      longCube2,
    ]);
    stats.end();

    // Tell the browser to call `tick` again whenever it renders a new frame
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
    flat.setDimensions(window.innerWidth, window.innerHeight);
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    // console.log(window.innerHeight / window.innerWidth);

  }, false);

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.setAspectRatio(window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();
  flat.setDimensions(window.innerWidth, window.innerHeight);

  // Start the render loop
  tick();
}

main();
