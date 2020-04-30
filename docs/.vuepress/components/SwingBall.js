class SwingBall {
    constructor(strategy, x) {
        this.x = x
        this.strategy = strategy
        this.angle = 45
        this.aSpeed = 1
    }
    draw(t, ctx) {
        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x, 0)
        ctx.fillStyle = '#071635'
        ctx.lineWidth = 4
        if (this.strategy === 'linear') {
            if (Math.abs(this.angle) >= 45) {
                this.aSpeed *= -1
            }
            this.angle += this.aSpeed
            ctx.rotate(this.angle / 180 * Math.PI)
        } else {
            ctx.rotate(Math.cos(t / 180 * Math.PI) * Math.PI * 0.25)
        }
        ctx.arc(0, 200, 25, 0, 2 * Math.PI)
        ctx.moveTo(0, 0)
        ctx.lineTo(0, 200)
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
}
export default SwingBall