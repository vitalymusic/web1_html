let showContentBtns = document.querySelectorAll(".showContentBtn");
let sections = document.querySelectorAll("section");


for(button of showContentBtns){
    button.onclick = (e)=>{
        // for(sec of sections){
        //     sec.classList.replace("activeSec","inactiveSec");
        // }

        let secId = e.target.dataset.id;

        if(document.querySelector("#"+secId).classList.contains("activeSec")){
            document.querySelector("#"+secId).classList.replace("activeSec","inactiveSec");
        }else{
            document.querySelector("#"+secId).classList.toggle("activeSec");
        }
       
    }
}




// console.log(showContentBtns[0]);
// console.log(sections);



// Dialog


let dialog = document.querySelector("#contactFormDialog");
let dialogOpenBtn = document.querySelector(".contactBtn");
let dialogCloseBtn = document.querySelector(".dialogCloseBtn");

dialogOpenBtn.onclick = ()=>{
    dialog.showModal();
}

dialogCloseBtn.onclick = ()=>{
    dialog.close();
}



