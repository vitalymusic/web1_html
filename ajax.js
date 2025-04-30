// AJAX  = XMlHTTPRequest => Fetch API

    fetch('./data.json')
    .then((atbilde)=>{
        return atbilde.json();
    })
    .then((dati)=>{
         ieliktTabula(dati);
    })
    .catch((error)=>{
        alert(error);
    })
    .finally(()=>{
        console.log("Dati ielādēti");
    }); 


    function ieliktTabula(dati){
        let table="";
        table+=`
             <tr style="font-weight:bold">
                <td>HTML tegs</td> 
                <td>Apraksts</td> 
                <td>Tegu atribūti un to nozīme</td> 
             </tr>
        `;

        for(rinda of dati.tags){
            let attr = "";
            for(atributs in rinda.attributes){
                attr += `<b>${atributs}</b>: ${rinda.attributes[atributs]}<br>` 
            }

            table+=`
                <tr>
                    <td>${rinda.tag}</td>
                    <td>${rinda.description}</td>
                    <td>${attr}</td>
                </tr>
            `;
        }

        document.querySelector("table").innerHTML = table;
    }



    // Kas ir API

    // Meteo API vaicajums
    let href = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m&timezone=Europe%2FLondon&forecast_days=7";

