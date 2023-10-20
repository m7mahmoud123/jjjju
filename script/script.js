let prof = document.getElementsByClassName("fa-solid fa-user-doctor")[0]
let card = document.getElementsByClassName("profile")[0]
let ser = document.getElementsByClassName("fa-solid fa-magnifying-glass")[0]
let input = document.getElementsByClassName("input")[0]
let sideIcon = document.getElementsByClassName("fa-solid fa-bars")[0]
let sideBar = document.getElementsByClassName("side-bar")[0]

let remove = document.getElementsByClassName("fa-solid fa-delete-left")[0]

prof.onclick = function(){
    card.classList.toggle("active")
    
    
}

let search = document.getElementById("search")

search.onclick = function(){
    input.classList.toggle("hide")
    card.classList.remove("active")
}

sideIcon.onclick = function(){

    sideBar.classList.toggle("newSide")
    document.body.classList.toggle("padding")

}

remove.onclick = function(){
    sideBar.classList.add("newSide")
    document.body.classList.toggle("padding")
    
}

