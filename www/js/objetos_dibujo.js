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

    pointPlus(p){
        return(new Punto(p.x + this.x, p.y + this.y));
    }

    newNorm(new_norm){
        var norm = Math.sqrt(this.x*this.x+this.y*this.y);
        return(new Punto(new_norm*this.x/norm, new_norm*this.y/norm));
    }

    esIgualA(p){
        if(p.x == this.x && p.y == this.y){
            return true;
        }else{
            return false;
        }
    }


}

Punto.prototype.toString = function()
{
    return "x: " + this.x.toFixed(2) + ", y: " + this.y.toFixed(2) ;
}

class Figura_Grilla{
    constructor(vert){
        /*this.punto_central = new Punto(0,0);
        for(var v in vert){
            this.punto_central = punto_central.pointPlus(vert[v]);
        }
        this.vertices = [];
        for(var v in vert){
            this.vertices.push(this.punto_central.vectorTo(vert[v]));
        }*/
        this.vertices = vert;
        this.seleccionada = false;
    }

    punto_es_interior(punto){
        return punto_dentro_de_vertices(punto,this.vertices);
    }

    desplazar(vector){
        for(var v in this.vertices){
            this.vertices[v] = new Punto(this.vertices[v].x + vector.x,
                                        this.vertices[v].y + vector.y );
        }
    }

    dibujar(ctx){
        if(this.vertices.length >= 1){
            ctx.beginPath();
            ctx.moveTo(this.vertices[0].x,this.vertices[0].y);
            for(var i=1;i<this.vertices.length; i++){
                ctx.lineTo(this.vertices[i].x,this.vertices[i].y);
            }
            ctx.closePath()
            ctx.fillStyle = "rgba(0, 0, 100, 0.2)";
            ctx.fill();
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = "rgba(0, 0, 75, 1)";
            ctx.stroke();
            for(var i=0;i<this.vertices.length; i++){
                ctx.beginPath();
                ctx.moveTo(this.vertices[i].x-5,this.vertices[i].y-5);
                ctx.lineTo(this.vertices[i].x-5,this.vertices[i].y+5);
                ctx.lineTo(this.vertices[i].x+5,this.vertices[i].y+5);
                ctx.lineTo(this.vertices[i].x+5,this.vertices[i].y-5);
                ctx.closePath();
                ctx.stroke();
            }
        }

    }
}

class Grilla{
    constructor(tam_grilla){
        this.tam_grilla = tam_grilla;
        //this.fillStyle = "rgba(0, 0, 200, 0.2)";
        this.lineWidth = 0.5;
		this.strokeStyle = "rgba(200, 200, 200, 1)";
    }

    set_tam_grilla(new_tam){
        this.tam_grilla = new_tam;
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