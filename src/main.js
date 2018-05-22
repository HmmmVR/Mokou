import Core from './Core'
import Util from './Util'

window.onload = function(e) {
    var core = new Core('#generator')

    var x = 0
    var y = 0

    var imgS = {
        width: 200,
        height: 200
    }

    core.addUpdate(pub => {
        x = Util.clamp(x += 1, 0, pub.width - imgS.width)
        y = Util.clamp(x += 1, 0, pub.height - imgS.height)
    })

    core.addDraw(pub => {
        var img = new Image(imgS.width, imgS.height)
        img.src = 'images/inputs/huh.jpg'

        pub.ctx.drawImage(img, x, y)
    })
}
