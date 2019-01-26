function keypress (e) {
    if (e.keyCode === right && !snake.left) {
        snake.right = true;
        snake.up = false;
        snake.down = false;
    }
    if (e.keyCode === left && !snake.right) {
        snake.left = true;
        snake.up = false;
        snake.down = false;
    }
    if (e.keyCode === up && !snake.down) {
        snake.up = true;
        snake.right = false;
        snake.left = false;
    }
    if (e.keyCode === down && !snake.up) {
        snake.down = true;
        snake.right = false;
        snake.left = false;
    }
}