
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let view = new View();
let food = new Food();
let snake = new Snake();
snake.body.push(new snakePart(50, 50));

const input = document.addEventListener('keydown', keypress);

const right = 39;
const left = 37;
const up = 38;
const down = 40;

let score = 0;

const scoreDisplay = document.querySelector('#score');

function draw() {
    view.drawBoard();
    view.drawSnake();
    view.drawFood();
    view.drawScore();
    
    snake.move();

    snake.body.forEach(body => {
        if ((body.x >= view.width || body.x < 0) || (body.y >= view.height || body.y < 0)) {
            collision = true;
            console.log('GAME OVER');
            clearInterval(game);

        } else {
            collision = false;
        }
    });

    if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
        food.eaten = true;
        snake.eat();
        food = new Food();
        score++;
    }

    if (snake.body.length > 3) {
        for (let i = 1; i < snake.body.length; i++) {
            const head = snake.body[0];
            if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
                clearInterval(game);
                console.log("GAME OVER");
            }
        }
    }
    
}


let game = setInterval(draw, 100);