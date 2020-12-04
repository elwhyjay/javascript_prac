import {
    Point
} from './point.js';


export class Wave{

    constructor(idx,totalPoints,color) {
        this.idx= idx;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        
        this.centerX = stageWidth/2;
        this.centerY = stageHeight/2;
        
        this.pointGap = this.stageWidth/(this.totalPoints-1);

        this.init();
    }   
    init(){
        this.points = [];
        for(let i =0;i<this.totalPoints;i++){
            const point = new Point(
                
                this.pointGap*i,
                this.centerY,
                this.idx+i
            );
            this.points[i] = point;
            
        }

    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        let PrevX =this.points[0].x;
        let PrevY = this.points[0].y;

        ctx.moveTo(PrevX,PrevY);

        for(let i =1;i<this.totalPoints;i++){
            if(i<this.totalPoints-1){
                this.points[i].update();
                
            }
            const cx = (PrevX+this.points[i].x)/2;
            const cy = (PrevY+this.points[i].y)/2;
            
            ctx.quadraticCurveTo(PrevX,PrevY,cx,cy);
            
            PrevX = this.points[i].x;
            PrevY = this.points[i].y;

        }
        
        
        ctx.lineTo(PrevX,PrevY);
        ctx.lineTo(this.stageWidth,this.stageHeight);
        ctx.lineTo(this.points[0].x,this.stageHeight);
        ctx.fill();
        ctx.closePath();

    }
    

}