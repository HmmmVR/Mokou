import Core from './Core'
import Util from './Util'
import Menu from './Menu'

function Mokou(canvas, input, names) {
    this.core = new Core(canvas, {
        fullscreen: true
    })
    this.images = []

    this.mouse = {
        x: 0,
        y: 0
    }

    names.forEach(name => {
        this.images.push(Util.normalizePath(input) + '/' + name)
    })

    this.menu = new Menu(this.images)

    this.core.on('mouseDown', (data, e) => {
        console.log('Mouse down')
    })

    this.core.on('mouseUp', (data, e) => {
        console.log('Mouse up')
    })

    this.core.on('keyDown', (data, e) => {
        console.log('keyDown')
    })

    this.core.on('keyUp', (data, e) => {
        console.log('keyUp')
    })

    this.core.on('mouseMove', (data, e) => {
        this.menu.onMouseMove(e)
    })

    this.core.on('update', data => {
        this.update(data)
    })

    this.core.on('draw', data => {
        this.draw(data)
    })

    this.core.start()
}

Mokou.prototype = {

    update(data) {
        this.menu.update(data)
    },

    draw(data) {
        this.menu.draw(data)
    }

}

export default Mokou
