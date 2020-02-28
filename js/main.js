var slots = document.querySelectorAll(".slots");

console.log(slots[0]);

// for(var i =0;i<slots.length;i++){
//     slots[i].addEventListener('click',()=>{
//         console.log(slots[i].innerText);
//     })
// }

slots.forEach(function(elem) {
    elem.addEventListener("click", function() {
        //this function does stuff

        console.log(elem.style.backgroundColor);
        if(elem.style.backgroundColor == "white"){
            elem.style.backgroundColor = "blue";
        }else{
            elem.style.backgroundColor = "white";
        }
        
    });
});

