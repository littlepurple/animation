<template>
  <div>
    <canvas ref="canvas" class="canvas" width="300" height="300"></canvas>
  </div>
</template>
<script>
import SwingBall from "./SwingBall.js";
export default {
  data() {
    return {
      ele: null,
      width: null,
      height: null,
      ctx: null,
      wave1: null,
      wave2: null
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.ele = canvas;
    this.resize();
    window.addEventListener("resize", () => this.resize());
    let t = 0;
    this.run(ctx => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      t += 2;
      this.wave1.draw(t, this.ctx);
      this.wave2.draw(t, this.ctx);
    });
  },
  methods: {
    run(callback) {
      requestAnimationFrame(() => {
        this.run(callback);
      });
      callback();
    },
    resize() {
      this.width = this.ele.width = this.ele.offsetWidth;
      this.height = this.ele.height = this.ele.offsetHeight;
      this.init();
    },
    init() {
      this.wave1 = new SwingBall("linear", this.width * 0.4);
      this.wave2 = new SwingBall("trigonometry", this.width * 0.7);
    }
  }
};
</script>
<style scoped>
.canvas {
  width: 100%;
  height: 100%;
  background: #aa733a;
}
</style>