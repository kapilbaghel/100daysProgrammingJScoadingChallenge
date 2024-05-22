const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentactive = 1
next.addEventListener('click',()=>{
    currentactive++
    if(currentactive>circle.length){
        currentactive = circle.length
    }
    update();
})

prev.addEventListener('click',()=>{
currentactive--;
if(currentactive < 1){
    currentactive = 1
} 

update()

})

function update(){
    circle.forEach((circle,idx) =>{
        if(idx < currentactive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })
}

const actives = document.querySelectorAll(".active")
progress.style.width = 33+"%";