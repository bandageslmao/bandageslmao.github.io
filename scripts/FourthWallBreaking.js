for (element in document.body){
    if (element.id == "bandageslmao"){
        window.addEventListener("pageswap",(evnt) => {
            drawDialogue("typewriter",document.body,4)
        })
    }
}