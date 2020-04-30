class WaterWave {
    constructor(
        { canvasWidth, // 轴长
            canvasHeight, // 轴高
            waveWidth = 0.055, // 波浪宽度,数越小越宽
            waveHeight = 6, // 波浪高度,数越大越高
            xOffset = 0, // 初始偏移
            speed = 0.04,  // 偏移速度
            colors = ['#DBB77A', '#BF8F3B'], // 波浪颜色}) {
            rangeValue = 0.6, // 水位控制
        }) {
        this.width = canvasWidth;
        this.height = canvasHeight;
        this.waveWidth = waveWidth;
        this.waveHeight = waveHeight;
        this.xOffset = xOffset;
        this.speed = speed;
        this.colors = colors;
        this.rangeValue = rangeValue
        this.nowRange = 0
    }
    drawSin(ctx) {
        ctx.beginPath();
        const radius = this.width / 2;
        const grd = ctx.createLinearGradient(radius, radius, radius, this.height);
        grd.addColorStop(0, this.colors[0]);
        grd.addColorStop(1, this.colors[1]);
        this.xOffset += this.speed;
        if (this.nowRange < this.rangeValue) {
            this.nowRange += 0.01;
        }
        for (let x = 0; x < this.width; x++) {
            const y = this.waveHeight * Math.sin(x * this.waveWidth + this.xOffset);
            ctx.lineTo(x, (1 - this.rangeValue) * this.height + y);
        }
        ctx.lineTo(this.width, this.height);
        ctx.lineTo(0, this.height);
        ctx.fillStyle = grd;
        ctx.fill();
    }
}
export default WaterWave