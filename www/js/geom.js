
function distancia(p1,p2){
    return Math.sqrt(Math.pow( ( p1.x-p2.x ),2)+Math.pow( ( p1.y-p2.y ),2))
}

function angulo_entre_vectores(v1,v2){
    var m1 = Math.pow(v1.x,2)+Math.pow(v1.y,2);
	var m2 = Math.pow(v2.x,2)+Math.pow(v2.y,2);
    var m = Math.sqrt(m1*m2);
    if(m1 == 0 || m2 == 0){
        return(0);
    }
    var pe = v1.x*v2.x + v1.y*v2.y;
    return(Math.acos(pe/m)*180/Math.PI);
}

function interseccion_recta_con_horizontal(pr,p1,p2){
    //pr punto de referencia
    //p1 y p2 puntos de la recta
    console.log(pr);
    console.log(p1);
    console.log(p2);
    if( (p1.y > pr.y && p2.y > pr.y) || (p1.y < pr.y && p2.y < pr.y) ){
        return false;
    }else if(p1.x > pr.x && p2.x > pr.x){
        return true;
    }else if(p1.x < pr.x && p2.x < pr.x){
        return false;
    }else{
        if(p1.x < p2.x){
            var pi = p1;
            var pf = p2;
        }else{
            var pi = p2;
            var pf = p1;
        }
        var arecta = Math.abs((pf.y - pi.y)/(pf.x-pi.x));
        var aref = Math.abs((pf.y - pr.y)/(pf.x-pr.x));
        if(aref < arecta){
            return true;
        }else{
            return false;
        }
    }
}

function punto_dentro_de_vertices(p,vertices){
    var cuenta_intersecciones = 0;
    for(var v = 1; v < vertices.length; v++){
        if(interseccion_recta_con_horizontal(p,vertices[v-1],vertices[v])){
            cuenta_intersecciones += 1;
        }
    }
    if(interseccion_recta_con_horizontal(p,vertices[v-1],vertices[0])){
        cuenta_intersecciones += 1;
    }
    if(cuenta_intersecciones % 2 == 0){
        return false;
    }else{
        return true;
    }
}