class snakePart {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.dx = view.tileSize;
        this.dy = view.tileSize;
    }

    getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    setX (x) {
        this.x = x;
    }

    setY (y) {
        this.y = y;
    }
}