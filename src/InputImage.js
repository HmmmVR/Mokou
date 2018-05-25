function InputImage(src, x, y, w, h) {
    this.source = src
    
    this.position = {
        x: x,
        y: y
    }

    this.width = w
    this.height = h
}

InputImage.prototype = {

    draw(ctx) {
        let img = new Image(this.width, this.height)
        img.src = this.source
        ctx.drawImage(img, this.position.x,this.position.y)
    },

    update(x, y, w, h) {
        this.position.x = x - (w / 2) + 25
        this.position.y = y - (h / 2) - 10
        this.width = w
        this.height = h
    },

    mouseCollide(mouseX, mouseY, dragging) {
        if (this.position.x < mouseX
            && this.position.x + this.width > mouseX + this.width
            && this.position.y < mouseY
            && this.position.y + this.mouse > mouseY + this.height
        ) {
            this.isDragging = true
        }
    }

}

export default InputImage
