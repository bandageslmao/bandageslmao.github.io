window.addEventListener("error",(e)=>{
    if (document.getElementById("debugdiv")){
        let debugmessage = document.createElement("p")
        debugmessage.textContent = e.message
        document.getElementById("debugdiv").appendChild(debugmessage)
    }
})

window.addEventListener("unhandledrejection",(e)=>{
        if (document.getElementById("debugdiv")){
        let debugmessage = document.createElement("p")
        debugmessage.textContent = e.reason
        document.getElementById("debugdiv").appendChild(debugmessage)
    }
})