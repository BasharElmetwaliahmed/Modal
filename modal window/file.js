let btns=document.querySelectorAll(".modalBtns button");
const modalWindow=document.querySelector(".modalWindow")
const overlay=document.querySelector(".overlay")
const closeButton=document.querySelector(".closeButton")

const showModal=function(){
    modalWindow.classList.remove("hidden")
    overlay.classList.remove("hidden")
    console.log("Bash")

}
btns.forEach((btn)=>{
btn.addEventListener("click",showModal)
})
const closeModal=function(){
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden")
}
overlay.addEventListener("click",closeModal)
closeButton.addEventListener("click",closeModal)

document.addEventListener("keydown",function(e){
    
    if(e.key==="Escape"){
        closeModal();
    }
})