class Food {
    constructor () {
        this.x = Math.floor(Math.random() * view.rows) * view.tileSize;
        this.y = Math.floor(Math.random() * view.columns) * view.tileSize;
        this.eaten = false;
    }

}