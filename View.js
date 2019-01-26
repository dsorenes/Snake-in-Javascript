class View {

    constructor () {
        this.width = 300;
        this.height = 300;

        this.tileSize = 10;

        this.rows = this.width / this.tileSize;
        this.columns = this.height / this.tileSize;
        this.grid = new Array (this.rows);

        ctx.canvas.width = this.width;
        ctx.canvas.height = this.height;
    }

    drawGrid() {
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, view.tileSize, view.tileSize);
    }

    drawScore() {
        scoreDisplay.innerHTML = "Score: " + score;
    }

    drawBoard() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, view.width, view.height);
        for (let x = 0; x < this.rows; x++) {
            this.grid[x] = new Array(this.columns);

            for (let y = 0; y < this.columns; y++) {
                let tile = new Tile(x * this.tileSize, y * this.tileSize);

                this.grid[x][y] = tile;
            }
        }
    }

    drawSnake () {
        snake.body.forEach(body => {
            ctx.fillStyle = 'white';
            ctx.fillRect(body.x, body.y, this.tileSize, this.tileSize);
        });
    }

    drawFood() {

        if (!food.eaten) {
            ctx.fillStyle = 'green';
            ctx.fillRect(food.x, food.y, this.tileSize, this.tileSize);

        }
    }

}
