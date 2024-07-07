function getScroll(){
    let y = scrollY
    let colors = ["#fff" , "#cf404d" ]
    let links = [document.getElementById('hme').style.color , document.getElementById('abt').style.color , document.getElementById('glry').style.color,  
                 document.getElementById('tact').style.color]
    if(y >=0 && y<238) {
        links[0] = colors[1]
        links[1] = colors[0]
        links[2] = colors[0]
        links[3] = colors[0]

    }
        
    else if(y > 238 && y <=960){
        links[0] = colors[0]
        links[1] = colors[1]
        links[2] = colors[0]
        links[3] = colors[0]



    }
    else if(y > 960 && y <= 1618){
        links[0] = colors[0]
        links[1] = colors[0]
        links[2] = colors[1]
        links[2] = colors[0]


    }
    else {
        links[0] = colors[0]
        links[1] = colors[0]
        links[2] = colors[0]
        links[2] = colors[1]
    }
        
    }
        
}
setInterval(getScroll,250);   //960 //1618

