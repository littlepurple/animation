<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>
<script>
export default {
  data() {
    return {
      ctx: null,
      ele: null,
      width: null,
      height: null
    };
  },
  mounted() {
    this.ele = this.$refs.canvas;
    this.ctx = this.ele.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    let tick = 0;
    this.run(() => {
      tick += 0.03;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.init(tick);
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
    drawHead(t) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.translate(0, Math.sin(t) * 4); //translate 方法重新映射画布上的 (0,0) 位置。
      ctx.arc(140, 45, 35, 0, 2 * Math.PI);
      // ctx.fill('#ffffff');
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      // console.log(123254);
    },
    drawBody(t) {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.save();
      ctx.rotate(((Math.sin(t) * Math.PI) / 180) * -1);
      ctx.translate(0, Math.sin(t) * 4);
      // ctx.scale(0.5, 0.5);
      const body = new Path2D(
        "M120,260 L80,260 C75,260 85,100 105,100 C110,100 130,110 120,110 L120,260Z"
      );
      // ctx.fill(body);
      // ctx.restore();
      // ctx.closePath();
      // console.log(this.width / 2); 
      ctx.fillStyle = "#ffffff";
      ctx.fill(body);
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
    },
    drawFeet(t) {
      const ctx = this.ctx;
      t = t / 2;
      ctx.save();
      ctx.scale(0.5, 0.5);
      ctx.translate(0, 460);
      const foot = new Path2D(
        "M43,0 C67,0 80,16 80,22 C80,26 78.6666667,28 76,28 C29.3333333,28 6,28 6,28 C6,28 -1.34111707e-14,30 0,17 C1.42108547e-14,4 10,1.9505735e-16 13,0 C16,0 13,0 43,0 Z"
      );

      ctx.save();
      ctx.translate(Math.cos(t) * -50, Math.sin(t) > 0 ? Math.sin(t) * -35 : 0);
      if (t < Math.PI) {
        ctx.rotate(((Math.sin(t) * Math.PI) / 180) * -5);
      }
      ctx.fillStyle = "#ffffff";
      ctx.fill(foot);
      ctx.restore();

      ctx.save();
      ctx.translate(
        Math.cos(t + Math.PI) * -50,
        Math.sin(t + Math.PI) > 0 ? Math.sin(t + Math.PI) * -35 : 0
      );
      if (t > Math.PI) {
        ctx.rotate(((Math.sin(t + Math.PI) * Math.PI) / 180) * -5);
      }
      ctx.fillStyle = "#ffffff";
      ctx.fill(foot);
      ctx.restore();

      ctx.restore();
    },
    init(t) {
      this.drawHead(t);
      this.drawBody(t);
      this.drawFeet(t);
    }
  }
};
</script>
<style scoped>
.canvas {
  width: 100%;
  height: 400px;
  background: #f1513b;
}
</style>