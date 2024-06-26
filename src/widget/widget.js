import color from "./utils/colors/color.js"
import grid from "./utils/grids/grid01.js"

function nextRect(key,draw){


    for(let i = 0; i <grid.length; i++){
        let x = grid[i].x
        let y =  grid[i].y
        let width =  grid[i].width
        let height =  grid[i].height 
        draw.rect().attr({
            x,y, width : width, height: height, fill: color(key.next256(), key.next16() % 7)
        })
    }
   

    
}

function nextCircle(key,draw){
    let x = grid[i].x
    let y =  grid[i].y
    let width =  grid[i].width
    let height =  grid[i].height 
    let r = 100 + key.next16() 
    draw.circle().attr({
        x,y,r, width : width, height: height, fill: color(key.next256(), key.next16() % 7)
    }) 
}

/* function nextCircle(key,draw){
    let cx = key.next4095() % 900
    let cy = key.next4095() % 900
    let cwidth = 100 + key.next256() 
    let cheight = 100 + key.next256()
    let r = 100 + key.next16() 
    draw.circle().attr({
        cx,cy,r, width : cwidth, height: cheight, fill: `#${key.next256() -100,key.next256(),key.next256(),key.next256(),key.next256(),key.next256()}`
    }) 
} */

function nextPolygon(key,draw){
    let p1 = key.next4095() % 900
    let p2 = key.next4095() % 900
    let p3 = key.next4095() % 900
    let p4 = key.next4095() % 900
    let p5 = key.next4095() % 900
    let p6 = key.next4095() % 900
 
   draw.polygon().attr({
       points:`${p1,p2,p3,p4,p5,p6}` , fill: color(key.next256(), key.next16() % 7)
   })
}

function widget(key, draw) {
    for(let i = 0; i < 5; i++){
        nextRect(key,draw)
        nextCircle(key,draw)
    }
   
   
}

export default widget