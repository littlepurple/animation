
class Wave {
    constructor(canvas, options) {
        this.canvas = canvas;
        this.options = options;
        this.xMove = this.options.offset; // 初始的位置
        this.xSpeed = this.options.xSpeed; 
        this.resize();
    }
    resize() {
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.amplitude = this.canvas.height * this.options.amplitude;
    }
    draw(ctx) {
        ctx.beginPath();
        this.xMove += this.xSpeed;
        ctx.moveTo(0, this.height / 2);
        var grad = ctx.createLinearGradient(0, 0, this.width, 0);
        grad.addColorStop(0, this.options.start);
        grad.addColorStop(1, this.options.stop);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.options.lineWidth;
        for (let x = 0; x < this.width; x++) {
            const radians = (x / this.width) * Math.PI * 2;
            const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5;
            const y =
                Math.sin(x * 0.02 + this.xMove) * this.amplitude * scale +
                this.height / 2;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
    }
}
export default Wave