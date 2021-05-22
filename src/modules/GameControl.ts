import Snake from './Snake';
import Food from './Food';
import Scorepanel from './Scorepanel';

class GameControl {
    snake:Snake;
    food:Food;
    scorepenel:Scorepanel;
    direction:string="";
    isLive = true;
    constructor() {
        this.snake=new Snake();
        this.food=new Food();
        this.scorepenel=new Scorepanel();
        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event:KeyboardEvent){
        this.direction = event.key;
    }

    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y-=10;
                break
            case "ArrowDown":
            case "Down":
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
        }
        this.checkEat(X,Y);
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            alert(e.message);
            this.isLive = false;
        }
        
        
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorepenel.level-1)*30);
    }

    checkEat(X:number,Y:number){
        if( X=== this.food.X && Y===this.food.Y){
            this.food.change();
            this.scorepenel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl;