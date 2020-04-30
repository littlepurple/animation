<template>
  <div class="sin-canvas-container">
    <canvas ref="canvas" class="canvas"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ele: null,
      ctx: null,
      width: null,
      height: null
    };
  },
  mounted() {
    this.ele = this.$refs.canvas;
    this.ctx = this.ele.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.draw(this.ctx);
  },
  methods: {
    draw(ctx) {
      this.ctx.clearRect(0, 0, this.ele.width, this.ele.height);
      ctx.beginPath();
      ctx.moveTo(0, this.height / 2);
      //   创建线性的渐变对象 (x0, y0, y1, y2)
      var grad = ctx.createLinearGradient(0, 0, this.width, 0);
      grad.addColorStop(0, "#6e45e2"); // 规定渐变的颜色
      grad.addColorStop(1, "#88d3ce");
      ctx.strokeStyle = grad;
      const amplitude = Math.random() * 60 + 10;
      for (let x = 0; x < this.width; x++) {
        const y = Math.sin(x * 0.02) * amplitude + this.ele.height / 2;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.closePath();
    },
    resize() {
      this.width = this.ele.width = this.ele.offsetWidth;
      this.height = this.ele.height = this.ele.offsetHeight;
      this.draw(this.ctx);
    }
  }
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