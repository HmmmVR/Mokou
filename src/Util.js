function Util() {

}

Util.prototype = {

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    },

    normalizePath(path) {
        if(path.charAt(0) === '/') {
            path = path.substr(1, path.length)
        }

        if (path.charAt(path.length - 1) === '/') {
            path = path.substr(0, path.length - 1)
        }

        return path
    }

}

export default new Util()
