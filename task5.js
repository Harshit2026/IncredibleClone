function getScroll(){
    let y = scrollY
    if(y >=0 && y<238) {
        document.getElementById('hme').style.color="#cf404d"
        document.getElementById('abt').style.color="#fff"
        document.getElementById('glry').style.color="#fff"
        document.getElementById('tact').style.color="#fff"

    }

    else if(y > 238 && y <=960){
        document.getElementById('hme').style.color="#fff"
        document.getElementById('abt').style.color="#cf404d"
        document.getElementById('glry').style.color="#fff"
        document.getElementById('tact').style.color="#fff"


    }
    else if(y > 960 && y <= 1618){
        document.getElementById('hme').style.color="#fff"
        document.getElementById('abt').style.color="#fff"
        document.getElementById('glry').style.color="#cf404d"
        document.getElementById('tact').style.color="#fff"

    }
    else if(y > 1618) {
        document.getElementById('hme').style.color="#fff"
        document.getElementById('abt').style.color="#fff"
        document.getElementById('glry').style.color="#fff"
        document.getElementById('tact').style.color="#cf404d"
    }

}
setInterval(getScroll,250);   //960 //1618
