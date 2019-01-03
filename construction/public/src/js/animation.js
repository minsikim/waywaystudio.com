var arrowRight = document.getElementById("ArrowRight");
var arrowLeft = document.getElementById("ArrowLeft");
var products = document.querySelector(".Products");
var pI = [];
for(var idx = 0; idx < products.childElementCount; idx++){
    pI.push(idx);
}


var setImageClass = function(){
    console.log("setImageClass", pI)
    for(var i = 0; i < products.childElementCount; i++){
        if(i === pI[0]){
            products.children[i].className = "Product current";
        }else if(i === pI[1]){
            products.children[i].className = "Product right";
        }else if(i === pI[pI.length-1]){
            products.children[i].className = "Product left";
        }else{
            products.children[i].className = "Product none";
        }
    }
}
var slideImage = function(direction){
    console.log("clicked")
    //right
    if(0 < direction){
        var temp = pI.shift();
        pI.push(temp);
    }
    //left
    else if(direction < 0){
        var temp = pI.pop();
        pI.unshift(temp);
    }
    setImageClass();
};


arrowRight.onclick = slideImage(1);
arrowLeft.onclick = slideImage(-1);

setImageClass();