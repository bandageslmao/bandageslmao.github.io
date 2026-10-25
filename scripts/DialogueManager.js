
async function drawDialogue(type,parent,id) {
    const response = await fetch("../data/dialogue.json")
    const dialogue = await response.json()
    switch (type){
        case "typewriter":
            let newparagraph = document.createElement("p")
            parent.appendChild(newparagraph)
                if (dialogue[id].speaker == "bandageslmao"){
                    let talksound = new Audio("../assets/audio/talksounds/bandageslmao/snd_vc_Sonic_Appeal02.wav")
                    talksound.volume = 0.3
                    talksound.play()
                    for (let i=0; i<dialogue[id].message.length+1;i++){
                    setTimeout(function(){
                        newparagraph.textContent = dialogue[id].message.slice(0,i)
                    },50*i)
                    }
                }else{
                    for (let i=0; i<dialogue[id].message.length+1;i++){
                    setTimeout(function(){
                        let talksound = new Audio("../assets/audio/talksounds/tc_what.mp3")
                        talksound.volume = 0.5
                        talksound.play()
                        newparagraph.textContent = dialogue[id].message.slice(0,i)
                    },50*i)
                    }
                }
            console.log("Did Typewriter :D")
            break
        case "flat":
            console.log("how boring /:|")
            break
    }
}