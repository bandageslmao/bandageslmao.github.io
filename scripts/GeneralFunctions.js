export async function PageSwap(goto,impromptu){
    let json = await fetch("../data/pages.json")
    let response = await json.json()
    for (const i in response){
        let page = response[i]
        if (page.id == goto){
            if(impromptu == false){
                let paintingsnd = new Audio("../assets/audio/sfx/Painting Enter.wav")
                paintingsnd.addEventListener("ended", () =>{window.location.href = page.url})
                paintingsnd.play()
            }else{
                let warpsnd = new Audio("../assets/audio/sfx/Warp.mp3")
                warpsnd.addEventListener("ended", () =>{window.location.href = page.url})
                warpsnd.play()
            }
        }
    }
}