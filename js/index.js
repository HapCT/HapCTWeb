var n =3;
var i = 1;
function next(){
    if(i==n){
        i = 1;
    }
    else {
        i++;
    }
    document.getElementById("slide").setAttribute("src","../img/banner_" +i+ ".png");
}
function back(){
    if(i==1){
        i = n;
    }
    else {
        i--;
    }
    document.getElementById("slide").setAttribute("src","../img/banner_" +i+ ".png");
}

function autoPlay(){
    setInterval(next, 3000);
}
autoPlay();


