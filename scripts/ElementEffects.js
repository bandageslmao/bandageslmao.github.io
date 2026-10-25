function fade(ver,time,element){
    if (ver == "in"){
        for(let i=0;i<1;i+=0.1){
            setTimeout(function(){
                element.style.opacity = i
            },(time*10)*i)
        }
    }else{
        console.log("ok")
    }
}