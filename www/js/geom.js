

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

}


function distancia(p1,p2){
    return Math.sqrt(Math.pow( ( p1.x()-p2.x() ),2)+Math.pow( ( p1.y()-p2.y() ),2))
}