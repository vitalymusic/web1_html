// AJAX  = XMlHTTPRequest => Fetch API

    fetch('./data.json')
    .then((atbilde)=>{
        return atbilde.json();
    })
    .then((dati)=>{
         ieliktTabula(dati);
    })
    .catch((error)=>{
        // alert(error);
    })
    .finally(()=>{
        console.log("Dati ielādēti");
    }); 


    function ieliktTabula(dati){
        let table="";

        for(rinda of dati.tags){
            let attr = "";
            for(atributs in rinda.attributes){
                attr += `${atributs} : ${rinda.attributes[atributs]}<br>` 
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
        
        


        console.log(dati)
    }



