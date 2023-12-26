let Koptok = document.querySelector(".koptok")

let topp = 100
let widthh = 100
function Up() {
    topp = topp - 5
    widthh = widthh + 3
    Koptok.style.top = `${topp}px`
    Koptok.style.width = `${widthh}px`
    Koptok.style.transform = "rotate(0deg)"
}

function Down() {
    topp = topp + 5
    widthh = widthh - 3
    Koptok.style.top = `${topp}px`
    Koptok.style.width = `${widthh}px`
    Koptok.style.transform = "rotate(180deg)"
}

let leftt = 100
function Right() {
    leftt = leftt + 5
    Koptok.style.left = `${leftt}px`
    Koptok.style.transform = "rotate(90deg)"
}

function Left() {
    leftt = leftt - 5
    Koptok.style.left = `${leftt}px`
    Koptok.style.transform = "rotate(270deg)"
}

function Restart() {
    Koptok.style.left = `100px`
    Koptok.style.top = `100px`
    Koptok.style.transform = "rotate(0deg)"
}