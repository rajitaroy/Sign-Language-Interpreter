// Define our labelmap
const labelMap = {
    1:{name:'0', color:'red'},
    2:{name:'1', color:'yellow'},
    3:{name:'2', color:'lime'},
    4:{name:'3', color:'blue'},
    5:{name:'4', color:'purple'},
    6:{name:'5', color:'yellow'},
    7:{name:'6', color:'lime'},
    8:{name:'7', color:'blue'},
    9:{name:'8', color:'purple'},
    10:{name:'9', color:'red'},
    11:{name:'a', color:'yellow'},
    12:{name:'b', color:'lime'},
    13:{name:'c', color:'blue'},
    14:{name:'d', color:'purple'},
    15:{name:'e', color:'red'},
    16:{name:'f', color:'yellow'},
    17:{name:'g', color:'lime'},
    18:{name:'h', color:'blue'},
    19:{name:'i', color:'purple'},
    20:{name:'j', color:'red'},
    21:{name:'k', color:'yellow'},
    22:{name:'l', color:'lime'},
    23:{name:'m', color:'blue'},
    24:{name:'n', color:'purple'},
    25:{name:'o', color:'red'},
    26:{name:'p', color:'yellow'},
    27:{name:'q', color:'lime'},
    28:{name:'r', color:'blue'},
    29:{name:'s', color:'purple'},
    30:{name:'t', color:'red'},
    31:{name:'u', color:'yellow'},
    32:{name:'v', color:'lime'},
    33:{name:'w', color:'blue'},
    34:{name:'x', color:'purple'},
    35:{name:'y', color:'red'},
    36:{name:'z', color:'yellow'},
    37:{name:'I love you', color:'lime'},
    38:{name:'hello', color:'blue'},
    39:{name:'Yes', color:'purple'},
    40:{name:'No', color:'red'},
    41:{name:'Thank you', color:'yellow'}
    
    
    
    
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}