let tests = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m&timezone=Europe%2FRiga&forecast_days=3";

let ievadesLauks = document.querySelector(".input input");
let button = document.querySelector(".btn1");


let pilsetas = {
    "Rīga":"latitude=52.52&longitude=13.41",
    "Jelgava":"latitude=56.65&longitude=23.7128",
    "Liepāja":"latitude=56.5047&longitude=21.0109",
    "Saldus":"latitude=56.6636&longitude=22.4881",
    "Kuldīga":"latitude=56.974&longitude=21.9572"
}

for( pilseta in pilsetas){
    console.log(pilseta,pilsetas[pilseta]);
}

button.onclick = ()=>{
    if(ievadesLauks.value > 0){
        getWeather(ievadesLauks.value);
    }else{
        alert("Ievadiet vērtību")
    }
}

let div = document.querySelector(".forecast");
async function getWeather(days){
    let href = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m&timezone=Europe%2FRiga&forecast_days=${days}`;

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








