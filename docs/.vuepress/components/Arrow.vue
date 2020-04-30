<template>
  <div>
    <canvas ref="canvas" class="canvas" width="500" height="500" style="background:#ccc;"></canvas>
  </div>
</template>
<script>
import Arrow from "./Arrow";
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      width: null,
      height: null,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    let centerX = this.canvas.width / 2;
    let centerY = this.canvas.height / 2;
    this.resize();
    window.addEventListener("resize", () => this.resize());
    // 将arrow的坐标设置为canvas的中心
    var mouse = this.captureMouse(this.canvas);
    var arrow1 = new Arrow();
    var arrow2 = new Arrow();
    arrow1.x = centerX;
    arrow1.y = centerY;

    arrow2.x = centerX / 2;
    arrow2.y = centerY / 2;
    this.run(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
        //设置旋转角度
      arrow1.rotation = this.RotationToMouse(mouse.x, mouse.y, arrow1.x, arrow1.y); //角度变化
      arrow1.draw(this.ctx);
      arrow2.rotation = this.RotationToMouse(mouse.x, mouse.y, arrow2.x, arrow2.y); //角度变化
      arrow2.draw(this.ctx);
   });
  },
  methods: {
    resize() {
      this.width = this.canvas.width = this.canvas.offsetWidth;
      this.height = this.canvas.height = this.canvas.offsetHeight;
      // this.planeDraw();
    },
    captureMouse(element) {
      var mouse = { x: 0, y: 0 };
      element.addEventListener(
        "mousemove",
        function(event) {
          var x, y;
          if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
          } else {
            x =
              event.clientX +
              document.body.scrollLeft +
              document.documentElement.scrollLeft;
            y =
              event.clientY +
              document.body.scrollTop +
              document.documentElement.scrollTop;
          }

          x -= element.offsetLeft;
          y -= element.offsetTop;

          mouse.x = x;
          mouse.y = y;
        },
        false
      );

      return mouse;
    },
    RotationToMouse(mx, my, ox, oy) {
      var dx = mx - ox;
      var dy = my - oy;
      var angle = Math.atan2(dy, dx);
      return angle;
    },
    run(callback) {
      requestAnimationFrame(() => {
        this.run(callback);
      });
      callback();
    }
  }
};
</script>
<style scoped>
</style>