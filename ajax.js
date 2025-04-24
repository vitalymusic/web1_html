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
        console.log(dati)
    }



