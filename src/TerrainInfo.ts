import {vec2} from 'gl-matrix'
import SystemInfoObject from './SystemInfoObject';
var hash = require('object-hash');

class TerrainInfo {

  private seed: number = 0;
  private ratio: number = 1;
  si: SystemInfoObject;

  private getHashInt(str: string): number {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  private randomVec2F1(x: number, y: number): number {
    return (this.getHashInt(hash.MD5(x.toString() + y.toString() + this.seed)) / Math.PI % 1 + 1) / 2;
  }

  private randomVec2Vec2(uv: vec2): vec2 {
    return vec2.fromValues(this.randomVec2F1(uv[0], uv[1]), this.randomVec2F1(uv[1], uv[0]));
  }

  constructor(si: SystemInfoObject) {
    this.si = si;
    this.compute();
  }

  compute() {
    this.seed = hash.sha1(this.si.globalSeed);
    this.ratio = this.si.mapWidthHeightRatio;
  }

  getHeight(x: number, y: number): number {
    return this.worleyHeight(x, y);
  }

  private worleyHeight(x: number, y: number): number {
    let tile: number = 5;
    
    let xi = Math.floor(tile * x);
    let yi = Math.floor(tile * y);
    let xf = tile * x % 1;
    let yf = tile * y % 1;
    
    let i_st: vec2 = vec2.fromValues(xi, yi);
    let f_st: vec2 = vec2.fromValues(xf, yf);

    let m_dist: number = 1;  // minimun distance
    let myCell: vec2 = vec2.create();
    vec2.copy(myCell, i_st);
    
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            // Neighbor place in the grid
            let neighbor: vec2 = vec2.fromValues(i, j);

            // Random position from current + neighbor place in the grid
            let curNei: vec2 = vec2.create();
            vec2.add(curNei, i_st, neighbor);
            let point: vec2 = this.randomVec2Vec2(curNei);

            // Vector between the pixel and the point
            let neighborPlusPoint: vec2 = vec2.create();
            vec2.add(neighborPlusPoint, point, neighbor);
            let diff: vec2 = vec2.create();
            vec2.sub(diff, neighborPlusPoint, f_st);

            // Distance to the point
            let dist: number = vec2.len(diff);

            // Keep the closer distance
            // m_dist = min(m_dist, dist);
            if (dist < m_dist) {
              m_dist = dist;
              vec2.copy(myCell, curNei);
            }
        }
    }
    let point: vec2 = this.randomVec2Vec2(myCell);
    let threshold = 0.02;
    // worley cernel debugging
    // if (Math.abs(point[0] - x) < threshold && Math.abs(point[1] - y) < threshold) {
    //   return 3.0;
    // }
    return this.randomVec2F1(myCell[0], myCell[1]);;
  }

  private gridHeight(x: number, y: number): number {
    if (x < 0 || x > 1 || y < 0 || y > this.ratio) {
      return 0;
    }

    let tile = 5;
    let xi = Math.floor(tile * x);
    let yi = Math.floor(tile * y);
    let xf = tile * x % 1;
    let yf = tile * y % 1;

    return this.randomVec2F1(xi, yi);
  }

  getHeightScaleShift(x: number, y: number, s: number): number {
    return this.getHeight(x / s + 0.5, y / s + 0.5);
  }

}

export default TerrainInfo;