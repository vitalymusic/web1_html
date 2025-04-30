function preloadImage(url){
  let image = new Image();
  image.src = url;
  return image;
}

const datorkursi = [
    {
      nosaukums: "Web izstrādes pamati",
      apraksts: "Šis kurss iepazīstinās jūs ar HTML, CSS un JavaScript pamatiem, ļaujot jums izveidot vienkāršas tīmekļa lapas un izprast tīmekļa izstrādes pamatus.",
      attels: preloadImage("./img/slide1.jpg").src
    },
    {
      nosaukums: "Programmēšana ar Python",
      apraksts: "Apgūstiet vienu no populārākajām programmēšanas valodām pasaulē. Šis kurss aptver Python pamatus, datu struktūras, funkcijas un moduļus.",
      attels: preloadImage("./img/slide2.jpg").src
    },
    {
      nosaukums: "Datu analīze ar R",
      apraksts: "Iemācieties analizēt un vizualizēt datus, izmantojot R programmēšanas valodu. Kurss ietver datu importēšanu, tīrīšanu, analīzi un grafiku veidošanu.",
      attels: preloadImage("./img/slide3.jpg").src
    },
    {
      nosaukums: "Mobilā lietotņu izstrāde ar React Native",
      apraksts: "Šis kurss iepazīstinās jūs ar React Native, ļaujot jums izveidot mobilās lietotnes gan iOS, gan Android platformām, izmantojot JavaScript un React.",
      attels: preloadImage("./img/slide4.jpg").src
    },
    {
      nosaukums: "Mākslīgais intelekts un mašīnmācīšanās",
      apraksts: "Iepazīstieties ar mākslīgā intelekta un mašīnmācīšanās pamatiem. Kurss aptver uzraudzīto un neuzraudzīto mācīšanos, neironu tīklus un praktiskus piemērus.",
      attels: preloadImage("./img/slide5.jpg").src
    }
  ];
  




let slideNumber = 0;
let slidesDiv = document.querySelector('.slides');
let leftbtn = document.querySelector('.slider_left_btn');
let rightbtn = document.querySelector('.slider_right_btn');
let time = 700;


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
    slidesDiv.classList.remove('fade-in');
    slidesDiv.classList.add('fade-out');
    // slidesDiv.classList.remove('bounce-in-right');
    // slidesDiv.classList.add('bounce-out-left');
    
    setTimeout(()=>{
      slideNumber--;
      if(slideNumber < 0){
          slideNumber = datorkursi.length -1;
      }
      showSlide(slideNumber);
      slidesDiv.classList.replace('fade-out','fade-in');
      // slidesDiv.classList.replace('bounce-out-left','bounce-in-right');
  },time);
    
}

rightbtn.onclick = (event)=>{
    event.preventDefault();
    slidesDiv.classList.remove('fade-in');
    slidesDiv.classList.add('fade-out');
    // slidesDiv.classList.remove('bounce-in-right');
    // slidesDiv.classList.add('bounce-out-left');

  setTimeout(()=>{
    slideNumber++;
    if(slideNumber > datorkursi.length -1){
        slideNumber=0;
    }
    showSlide(slideNumber);
    slidesDiv.classList.replace('fade-out','fade-in');
    // slidesDiv.classList.replace('bounce-out-left','bounce-in-right');
  },time)

}

setInterval(()=>{
    rightbtn.click();
},7000);





