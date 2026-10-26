let playerdir = ""

left = document.getElementById("leftside")
left.style.fill = null
right = document.getElementById("rightside")
right.style.fill = null
middle = document.getElementById("middle")

for (let i=0;i<3;i++){
    switch(i){
        case 1:
            left.addEventListener("mouseenter", (event) => {
                playerdir = "left"
            })
        case 2:
            right.addEventListener("mouseenter", (event) => {
                playerdir = "right"
            })
        case 3:
            middle.addEventListener("mouseenter", (event) => {
                playerdir = "middle"
            })
    }
}