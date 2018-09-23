//alert("hola mundo JS");
//console.log("hola mundo js en consola");
//DOM (document object model)

//let element = document.querySelector(".fa-arrow-circle-left");
// los objetos dentro del DOM se conocen como nodos

// let elementlist = document.querySelectorAll(".fa-arrow-circle-left");

// elementlist.forEach(function(element){
//     element.addEventListener("click",function(){
//         alert("flecha clickeada");
//     })    
// });

//eventos

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(()=>{
            location.href="../index.html";
        },500);
        
    });
})
