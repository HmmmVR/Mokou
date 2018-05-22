function Core(canvas, options) {
    var _this = this

    if (typeof options === 'undefined') {
        options = {
            fullscreen: false
        }
    }

    this.options = options

    this.canvas = document.querySelector(canvas)

    if (this.options.fullscreen) {
        this.fullscreen()
    }

    this.width = this.canvas.width
    this.height = this.canvas.height
    this.ctx = this.canvas.getContext('2d')

    this.event = {
        'mouseDown': _ => {},
        'mouseUp': _ => {},
        'keyDown': _ => {},
        'keyUp': _ => {},
        'mouseMove': _ => {},
        'resize': _ => {},
        'update': _ => {},
        'draw': _ => {}
    }

    this.fps = 0
    this.lastCalled = Date.now()
    this.delta = null

    this.canvas.addEventListener('mousedown', function (e) { _this.event.mouseDown(_this.getPublic(), e) }, false)
    this.canvas.addEventListener('mouseup', function (e) { _this.event.mouseUp(_this.getPublic(), e) }, false)
    this.canvas.addEventListener('mousemove', function (e) { _this.event.mouseMove(_this.getPublic(), e) }, false)
    this.canvas.addEventListener('resize', function(e) { _this.event.resize(_this.getPublic(), e)}, false)
    
    window.addEventListener('keydown', function (e) { _this.event.keyDown(_this.getPublic(), e) }, false)
    window.addEventListener('keyup', function (e) { _this.event.keyUp(_this.getPublic(), e) }, false)
    
    window.addEventListener('resize', function (e) {
        if (_this.options.fullscreen) {
            _this.fullscreen()
        }
    })

}

Core.prototype = {

    fullscreen() {
        this.canvas.width = document.body.clientWidth
        this.canvas.height = document.body.clientHeight
        this.width = this.canvas.width
        this.height = this.canvas.height
    },

    start() {
        this.util()
        this.event.update(this.getPublic())
        this.event.draw(this.getPublic())

        this.ctx.clearRect(0,0, this.width, this.height)

        requestAnimationFrame(this.start.bind(this))
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

    on(event, fun) {
        switch (event) {
            case 'update':
                this.event.update = fun
                break
            case 'draw':
                this.event.draw = fun
                break
            case 'keyDown':
                this.event.keyDown = fun
                break
            case 'keyUp':
                this.event.keyUp = fun
                break
            case 'mouseDown':
                this.event.mouseDown = fun
            case 'mouseUp':
                this.event.mouseUp = fun
                break
            case 'mouseMove':
                this.event.mouseMove = fun
                break
            case 'resize':
                this.event.resize = fun
                break
            default:
                break;
        }
    }
}

export default Core
