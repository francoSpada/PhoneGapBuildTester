
function distancia(p1,p2){
    return Math.sqrt(Math.pow( ( p1.x-p2.x ),2)+Math.pow( ( p1.y-p2.y ),2))
}


/*
def anguloVV(x0,y0,x1,y1):
	m1 = pow(x0,2)+pow(y0,2)
	m2 = pow(x1,2)+pow(y1,2)
	m = math.sqrt(m1*m2)
	if m1 == 0 or m2 == 0:
		return 0
	pe = x0*x1 + y0*y1
	return math.degrees(math.acos(pe/m))
*/
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