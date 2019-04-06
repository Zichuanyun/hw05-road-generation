import {vec2} from 'gl-matrix'
var hash = require('object-hash');

class TerrainInfo {

  private seed: number = 0;
  private ratio: number = 1;

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

   randomVec2F1(x: number, y: number): number {
    return (this.getHashInt(hash.MD5(x.toString() + y.toString() + this.seed)) / Math.PI % 1 + 1) / 2;
  }

  constructor(seed: number, ratio: number) {
    this.seed = hash.sha1(seed);
    this.ratio = ratio;
  }

  getHeight(x: number, y: number): number {
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

}

export default TerrainInfo;