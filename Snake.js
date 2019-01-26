class Snake {
    constructor() {
        this.body = [];
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    getBody() {
        return this.body;
    }

    getTail() {
        return this.body[this.body.length - 1];
    }

    eat () {

        let x = this.getTail().x;
        let y = this.getTail().y;
        let dx = this.getTail().dx;
        let dy = this.getTail().dy;

        if (this.left) {
            x += dx;
        }

        if (this.right) {
            x -= dx;
        }

        if (this.up) {
            y -= dy;
        }
        
        if (this.down) {
            y += dy;
        }

        this.body.push(new snakePart(x, y));
    }

    move() {
        let oldX = this.body[0].x;
        let oldY = this.body[0].y;
        
        if (this.right && !this.left) {
            let last = this.body.pop();
            last.x = oldX + last.dx;
            last.y = oldY;
            this.body.unshift(last);
           
        }
        if (this.left && !this.right) {

            let last = this.body.pop();
            last.x = oldX - last.dx;
            last.y = oldY;
            this.body.unshift(last);

        }
        
        if (this.up && !this.down) {

            let last = this.body.pop();
            last.y = oldY - last.dy;
            last.x = oldX;
            this.body.unshift(last);

        }
        if (this.down && !this.up) {

            let last = this.body.pop();
            last.y = oldY + last.dy;
            last.x = oldX;
            this.body.unshift(last);
        }
    }

}