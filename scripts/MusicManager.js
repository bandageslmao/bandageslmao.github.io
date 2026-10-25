function initpagemus(){
    if(window.location.href.endsWith("index.html")){
        let bgm = new Audio("../assets/audio/music/St.Solis.mp3")
        bgm.volume = 0.5
        bgm.play()
    }
}
initpagemus()