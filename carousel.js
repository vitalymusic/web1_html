const datorkursi = [
    {
      nosaukums: "Web izstrādes pamati",
      apraksts: "Šis kurss iepazīstinās jūs ar HTML, CSS un JavaScript pamatiem, ļaujot jums izveidot vienkāršas tīmekļa lapas un izprast tīmekļa izstrādes pamatus.",
      attels: "./img/slide1.jpg"
    },
    {
      nosaukums: "Programmēšana ar Python",
      apraksts: "Apgūstiet vienu no populārākajām programmēšanas valodām pasaulē. Šis kurss aptver Python pamatus, datu struktūras, funkcijas un moduļus.",
      attels: "./img/slide2.jpg"
    },
    {
      nosaukums: "Datu analīze ar R",
      apraksts: "Iemācieties analizēt un vizualizēt datus, izmantojot R programmēšanas valodu. Kurss ietver datu importēšanu, tīrīšanu, analīzi un grafiku veidošanu.",
      attels: "./img/slide3.jpg"
    },
    {
      nosaukums: "Mobilā lietotņu izstrāde ar React Native",
      apraksts: "Šis kurss iepazīstinās jūs ar React Native, ļaujot jums izveidot mobilās lietotnes gan iOS, gan Android platformām, izmantojot JavaScript un React.",
      attels: "./img/slide4.jpg"
    },
    {
      nosaukums: "Mākslīgais intelekts un mašīnmācīšanās",
      apraksts: "Iepazīstieties ar mākslīgā intelekta un mašīnmācīšanās pamatiem. Kurss aptver uzraudzīto un neuzraudzīto mācīšanos, neironu tīklus un praktiskus piemērus.",
      attels: "./img/slide5.jpg"
    }
  ];
  

let slideNumber = 0;
let slidesDiv = document.querySelector('.slides');
let leftbtn = document.querySelector('.slider_left_btn');
let rightbtn = document.querySelector('.slider_right_btn');



function showSlide(number){
      slidesDiv.innerHTML = `
         <div class="slide">
            <img src="${datorkursi[number].attels}" alt="">
            <h3>${datorkursi[number].nosaukums}</h3>
            <p>${datorkursi[number].apraksts}</p>
            <button>Pieteikties</button>
        </div> `;
}


showSlide(slideNumber);


leftbtn.onclick = (event)=>{
    event.preventDefault();
    
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = datorkursi.length -1;
    }
    showSlide(slideNumber);
    
}

rightbtn.onclick = (event)=>{
    event.preventDefault();
    slideNumber++;
    if(slideNumber > datorkursi.length -1){
        slideNumber=0;
    }

    showSlide(slideNumber);
    console.log(slideNumber);
}

setInterval(()=>{
    rightbtn.click();
},2000);





