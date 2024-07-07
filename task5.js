function getScroll(){
    let y = scrollY
    let colors = ["#fff" , "#cf404d" ]
    let links = [document.getElementById('hme') , document.getElementById('abt') , document.getElementById('glry'),  
                 document.getElementById('tact')]
    if(y >=0 && y<238) {
        links[0].style.color = colors[1]
        links[1].style.color = colors[0]
        links[2].style.color = colors[0]
        links[3].style.color = colors[0]

    }
        
    else if(y > 238 && y <=960){
        links[0].style.color = colors[0]
        links[1].style.color = colors[1]
        links[2].style.color = colors[0]
        links[3].style.color = colors[0]



    }
    else if(y > 960 && y <= 1618){
        links[0].style.color = colors[0]
        links[1].style.color = colors[0]
        links[2].style.color = colors[1]
        links[3].style.color = colors[0]


    }
    else {
        links[0].style.color = colors[0]
        links[1].style.color = colors[0]
        links[2].style.color = colors[0]
        links[3].style.color = colors[1]
    }
}
setInterval(getScroll , 250);
