import{
    Wave
}from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalWaves = 4;
        this.Points = [6,7,6,7];

        this.color = ['rgba(34,185,199,0.4)','rgba(84,185,199,0.4)','rgba(134,185,199,0.4)','rgba(189,185,199,0.4)'];
        this.waves =[];

        for (let i =0;i<this.totalWaves;i++){
            const wave = new Wave(
                i, this.Points[i],this.color[i]
            );
            this.waves[i] = wave;
        }
    }
    
    resize(stageWidth,stageHeight){
        for(let i =0;i<this.totalWaves;i++){
            const wave = this.waves[i];
            wave.resize(stageWidth,stageHeight);
        }
    }
    draw(ctx){
        for(let i =0;i<this.totalWaves;i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}