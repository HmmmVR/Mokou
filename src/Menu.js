import InputImage from './InputImage'

function Menu(items) {
    let _this = this
    this.items = []
    this.mouse = { x: 0, y: 0 }

    items.forEach(item => {
        this.items.push(new InputImage(item, 50, 50, 200, 200))
    })
}

Menu.prototype = {

    update(data) {
        this.items.forEach(item => {
            item.update(this.mouse.x, this.mouse.y, 200, 200)
        })
    },

    draw(data) {
        this.items.forEach(item => {
            item.draw(data.ctx)
        })
    },

    onMouseDown(data) {

    },

    onMouseMove(data) {
        this.mouse = {
            x: data.x,
            y: data.y
        }
    }

}

export default Menu
