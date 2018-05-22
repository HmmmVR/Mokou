function Util() {

}

Util.prototype = {

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }

}

export default new Util()
