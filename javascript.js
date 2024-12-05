const bodyel= document.querySelector("body");
bodyel.addEventListener("mousemove",(event)=>{
    const x= event.offsetX;
    const y= event.offsetY;
    const spanel=document.createElement("span");
    spanel.style.left= x + "px";
    spanel.style.top= y + "px";
    const size = Math.random()*100;
    spanel.style.width = size + "px"
    spanel.style.height = size + "px"
        bodyel.appendChild(spanel);
        setTimeout(() => {
          spanel.remove();  
        }, 3000);
    });