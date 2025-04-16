let showContentBtns = document.querySelectorAll(".showContentBtn");
let sections = document.querySelectorAll("section");


for(button of showContentBtns){
    button.onclick = (e)=>{
        let secId = e.target.dataset.id;
        document.querySelector("#"+secId).classList.toggle("activeSec");
    }
}




console.log(showContentBtns[0]);
console.log(sections);
