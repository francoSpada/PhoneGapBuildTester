class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    x(){
        return this.x;
    }
    y(){
        return this.y
    }

    vectorTo(p){
        return(new Punto(p.x - this.x, p.y - this.y));
    }
}

Punto.prototype.toString = function()
{
    return "x: " + this.x.toFixed(2) + ", y: " + this.y.toFixed(2) ;
}

class Grilla{
    constructor(tam_grilla){
        this.tam_grilla = tam_grilla;
        //this.fillStyle = "rgba(0, 0, 200, 0.2)";
        this.lineWidth = 0.4;
		this.strokeStyle = "rgba(240, 240, 240, 1)";
    }

    dibujar(wdw){
        ctx = wdw.ctx;
        ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.strokeStyle;
        //verticales
        for(var x = this.tam_grilla/2; x < wdw.w; x += this.tam_grilla){
            ctx.moveTo(x,0);
            ctx.lineTo(x,wdw.h);
            ctx.stroke();
        }
        for(var y = this.tam_grilla/2; y < wdw.h; y += this.tam_grilla){
            ctx.moveTo(0,y);
            ctx.lineTo(wdw.w,y);
            ctx.stroke();
        }
    }

    punto_mas_cercano(p){
        var x = p.x - p.x%this.tam_grilla + this.tam_grilla/2;
        var y = p.y - p.y%this.tam_grilla + this.tam_grilla/2;
        return(new Punto(x,y))
    }

}