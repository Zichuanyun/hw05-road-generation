import {vec2, vec3, vec4} from 'gl-matrix';
import Drawable from '../rendering/gl/Drawable';
import {gl} from '../globals';
import TerrainInfo from '../TerrainInfo';
import { timingSafeEqual } from 'crypto';

class Plane extends Drawable {
  indices: Uint32Array;
  positions: Float32Array;
  normals: Float32Array;
  colors: Float32Array;
  center: vec3;
  scale: vec2;
  subdivs: number; // 2^subdivs is how many squares will compose the plane; must be even.
  ti: TerrainInfo;

  constructor(center: vec3, scale: vec2, subdivs: number, ti: TerrainInfo) {
    super(); // Call the constructor of the super class. This is required.
    this.ti = ti;
    this.center = vec3.fromValues(center[0], center[1], center[2]);
    this.scale = scale;
    this.subdivs = subdivs + subdivs % 2; // Ensures the number is even, rounds up.
  }

  create() {
    let width: number = Math.pow(2, this.subdivs / 2);
    let normalize: number = 1.0 / width;
    this.positions = new Float32Array((width + 1) * (width + 1) * 4);
    this.normals = new Float32Array((width + 1) * (width + 1) * 4);
    this.indices = new Uint32Array(width * width * 6); // NxN squares, each square is two triangles, each triangle is three indices
    this.colors = new Float32Array((width + 1) * (width + 1) * 4);

    let posIdx = 0;
    let colIdx = 0;
    for(let x = 0; x <= width; ++x) {
      for(let z = 0; z <= width; ++z) {
        let h: number = this.ti.getHeight(x / width, z / width);
        
        // Make a strip of vertices along Z with the current X coord
        this.normals[posIdx] = 0;
        this.positions[posIdx++] = x * normalize * this.scale[0] + this.center[0] - this.scale[0] * 0.5;
        
        this.normals[posIdx] = 1;
        this.positions[posIdx++] = 0 + this.center[1] + h * 5; // here
        
        this.normals[posIdx] = 0;
        this.positions[posIdx++] = z * normalize * this.scale[1] + this.center[2] - this.scale[1] * 0.5;
        
        this.normals[posIdx] = 0;
        this.positions[posIdx++] = 1;

        this.colors[colIdx++] = h;
        this.colors[colIdx++] = h;
        this.colors[colIdx++] = h;
        this.colors[colIdx++] = 1;
      }
    }

    let indexIdx = 0;
    // Make the squares out of indices
    for(let i = 0; i < width; ++i) { // X iter
      for(let j = 0; j < width; ++j) { // Z iter
        this.indices[indexIdx++] = j + i * (width + 1);
        this.indices[indexIdx++] = j + 1 + i * (width + 1);
        this.indices[indexIdx++] = j + (i + 1) * (width + 1);

        this.indices[indexIdx++] = j + 1 + i * (width + 1);
        this.indices[indexIdx++] = j + (i + 1) * (width + 1);
        this.indices[indexIdx++] = j + 1 + (i + 1) * (width + 1);
      }
    }

    this.generateIdx();
    this.generatePos();
    this.generateNor();
    this.generateCol();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

    console.log(`Created plane`);
  }
};

export default Plane;
