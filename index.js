function check(key){
    switch(key){
        case "a":
            let a=new Audio('tom-1.mp3');
            a.play();
        case "s":
            let s=new Audio('tom-2.mp3');
            s.play();
        case "d":
            let d=new Audio('tom-3.mp3');
            d.play();
        case "j":
            let j=new Audio('crash.mp3');
            j.play();
        case "k":
            let k=new Audio('kick-bass.mp3');
            k.play();
        case "l":
            let l=new Audio('snare.mp3');
            l.play();
    }
}
function mouse(){
    let key= this.innerHTML;
    check(key);
    animate(key);
}
for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    let curr=document.querySelectorAll(".drum")[i];
    curr.addEventListener("click",mouse)
}

document.addEventListener('keydown',function(e){
    let curr=e.key;
    check(curr);
    animate(curr);
})

function animate(key){
    let tr=document.querySelector("."+key);
    tr.classList.add("press");
    setTimeout(function(){
        tr.classList.remove("press")
    },150);
}