<template>
  <div class="sin-canvas-container">
    <canvas ref="canvas" class="canvas"></canvas>
  </div>
</template>
<script>
import Wave from "./wave.js";
export default {
  data() {
    return {
      ele: null,
      ctx: null,
      canvas: null,
      width: null,
      height: null,
      waves: [],
      xMove: null,
      xSpeed: null,
      options: {}
    };
  },
  mounted() {
    this.ele = this.$refs.canvas;
    this.ctx = this.ele.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.run(() => {
      this.ctx.clearRect(0, 0, this.ele.width, this.ele.height);
      this.waves.forEach(wave => {
        wave.draw(this.ctx);
      });
    });
  },
  methods: {
    resize() {
      this.width = this.ele.width = this.ele.offsetWidth;
      this.height = this.ele.height = this.ele.offsetHeight;
      this.init();
    },
    run(callback) {
      requestAnimationFrame(() => {
        this.run(callback);
      });
      callback();
    },
    init() {
      const gradients = [
        ["#6e45e2", "#88d3ce"],
        ["#de6262", "#ffb88c"],
        ["#64b3f4", "#c2e59c"],
        ["#0fd850", "#f9f047"],
        ["#007adf", "#00ecbc"],
        ["#B6CEE8", "#F578DC"],
        ["#9be15d", "#00e3ae"]
      ];
      this.waves = [];
      for (let i = 0; i < 5; i++) {
        const [start, stop] = gradients[
          Math.floor(Math.random() * gradients.length)
        ];
        this.waves.push(
          new Wave(this.ele, {
            start,
            stop,
            lineWidth: 1,
            xSpeed: this.valueMapping(Math.random(), 0, 1, -0.05, -0.08), // 偏移的速度
            amplitude: this.valueMapping(Math.random(), 0, 1, 0.05, 0.5),
            offset: Math.random() * 100  // 初始偏移
          })
        );
      }
    },
    valueMapping(x, inMin, inMax, outMin, outMax) {
      return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  },
};
</script>
<style scoped>
.sin-canvas-container {
  width: 100%;
  height: 100%;
  background: #232323;
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>