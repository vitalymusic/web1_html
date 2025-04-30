// Meteo API vaicajums
let href = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m&timezone=Europe%2FRiga&forecast_days=7";


let div = document.querySelector(".forecast");

 getWeather();

async function getWeather(){
    let atbilde = await fetch(href);
    let dati = await atbilde.json();
    await showTable(dati);
}

function showTable(data){

    let out = `
 <table class="table">
    <tr>
        <td>Laiks</td>
        <td>Temperatūra</td>
    </tr>`;
    data.hourly.time.forEach((item,i)=>{
        out+=`
        <tr>
           <td>${showTime(item)}</td>
           <td>${data.hourly.temperature_2m[i]} &deg;C</td>
       </tr>`
    })
    out+=`<table>`;
    div.innerHTML = out;
    console.log(out);
}   


function showTime(datums){
    // console.log(datums);
    let time = new Date(datums);

    let diena  = time.getDate();
    let menesis = time.getMonth();
    let gads = time.getFullYear();
    let stunda  = time.getHours();
    let minutes = time.getMinutes();

    return `${diena}.${menesis+1}.${gads} ${stunda}:00`;
}








