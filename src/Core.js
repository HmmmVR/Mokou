import Util from './Util'

function Core(canvas) {
    this.canvas = document.querySelector(canvas)
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.ctx = this.canvas.getContext('2d')

    this.fps = 0
    this.lastCalled = Date.now()
    this.delta = null

    this.updateBag = []
    this.drawBag = []

    this.start()
}

Core.prototype = {

    start() {
        this.util()
        this.update(this.delta)
        this.draw()
        requestAnimationFrame(this.start.bind(this))
    },

    addUpdate(fn) {
        this.updateBag.push(fn)
        return this
    },

    addDraw(fn) {
        this.drawBag.push(fn)
        return this
    },

    getPublic() {
        return {
            fps: this.fps,
            delta: this.delta,
            ctx: this.ctx,
            width: this.width,
            height: this.height
        }
    },

    util() {
        this.delta = (Date.now() - this.lastCalledTime)/1000;
        this.lastCalledTime = Date.now();
        this.fps = 1/this.delta;
    },

    update() {
        this.updateBag.forEach(updateFn => {
            updateFn(this.getPublic())
        });

        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    draw() {
        this.drawBag.forEach(drawFn => {
            drawFn(this.getPublic())
        })
    }

}

export default Core
