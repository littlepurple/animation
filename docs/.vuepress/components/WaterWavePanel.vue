<template>
  <div>
    <canvas ref="canvas" class="canvas" width="300" height="300"></canvas>
  </div>
</template>
<script>
import WaterWave from "./WaterWave.js";
export default {
  data() {
    return {
      ele: null,
      width: null,
      height: null,
      ctx: null,
      radius: null, // 圆的半径
    };
  },
  mounted() {
    // requestAnimationFrame(this.drawSin(ctx));
    const canvas = this.$refs.canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.ele = canvas;
    this.radius = canvas.width / 2;
    this.drawCircle(this.ctx);
    this.wave1 = new WaterWave({
      canvasWidth: this.width, // 轴长
      canvasHeight: this.height, // 轴高
      waveWidth: 0.055, // 波浪宽度,数越小越宽
      waveHeight: 4, // 波浪高度,数越大越高
      colors: ["#F39C6B", "#A0563B"], // 波浪颜色
      xOffset: 0, // 初始偏移
      speed: 0.04 // 速度
    });
    this.wave2 = new WaterWave({
      canvasWidth: this.width, // 轴长
      canvasHeight: this.height, // 轴高
      waveWidth: 0.04, // 波浪宽度,数越小越宽
      waveHeight: 3, // 波浪高度,数越大越高
      colors: ["rgba(243, 156, 107, 0.48)", "rgba(160, 86, 59, 0.48)"], // 波浪颜色
      xOffset: 2, // 初始偏移
      speed: 0.02 // 速度
    });
    this.run(ctx => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.wave1.drawSin(this.ctx);
      this.wave2.drawSin(this.ctx);
    });
  },
  methods: {
    run(callback) {
      requestAnimationFrame(() => {
        this.run(callback);
      });
      callback();
    },
    drawCircle(ctx) {
      const lineWidth = 4;
      const cR = this.radius - lineWidth;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.arc(this.radius, this.radius, cR, 0, 2 * Math.PI);
      ctx.strokeStyle = "rgba(186, 165, 130, 0.3)";
      ctx.stroke();
      ctx.clip();
    }
  }
};
</script>
<style scoped>
</style>