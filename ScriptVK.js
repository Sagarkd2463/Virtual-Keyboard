let textContainer = document.querySelector(".text-container");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete");
let capslockKey = document.querySelector(".capslock");
let allKeys = document.querySelectorAll(".key");

let isCaps = false;


enterKey.addEventListener("click", ()=>{
    let content  = textContainer.innerText;
    let newContent = content + "\n";
    textContainer.innerText = newContent; 
});


spaceKey.addEventListener("click", ()=>{
    let content  = textContainer.innerText;
    let newContent = content + "\u00A0";
    textContainer.innerText = newContent; 
});

deleteKey.addEventListener("click", ()=>{
    let content  = textContainer.innerText;
    if(content.length == 0){
        return; 
    }
    let newContent = content.slice(0, content.length - 1);
    textContainer.innerText = newContent; 
});

capslockKey.addEventListener("click", ()=> {
    if(isCaps){
        capslockKey.classList.remove("active");
        for(let key of allKeys){
            if(key.classList.contains("delete") || key.classList.contains("enter") || 
            key.classList.contains("space") || key.classList.contains("capslock")){
                //do nothing
            } else {
                key.innerText = key.innerText.toLowerCase();
            }
        }
    } else {
        capslockKey.classList.add("active");
        for(let key of allKeys){
            if(key.classList.contains("delete") || key.classList.contains("enter") || 
            key.classList.contains("space") || key.classList.contains("capslock")){
                //do nothing
            } else {
                key.innerText = key.innerText.toUpperCase();
            }
        }
    }

    isCaps = !isCaps;
});

for(let key of allKeys){
    if(key.classList.contains("delete") || key.classList.contains("enter") || 
       key.classList.contains("space") || key.classList.contains("capslock")){
            //do nothing
        } else {
            key.addEventListener("click", () => {
            textContainer.innerText += key.innerText; 
        }); 
    }
}