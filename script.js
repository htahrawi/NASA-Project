const input = document.querySelector("input.bday");
const API_KEY = "oh3fSDGShKIZG6VQec5PgJJS2ofUEOc8QPZt2pYD";

// input.max = new Date().toLocaleDateString('en-ca');

input.addEventListener('change',(event)=> getAPOD(event.target.value));
//oh3fSDGShKIZG6VQec5PgJJS2ofUEOc8QPZt2pYD
const getAPOD = (date)=>{
    const url = 'https://api.nasa.gov/planetary/apod?api_key='+API_KEY+'&date='+date;
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("يرجى اختيار تاريخ ما بين 1996 و تاريخ اليوم");
            }
            return res.json();
        })
        .then((data) => displayABOD(data))
        .catch((error) => displayErrorMessage(error));

    };
const displayABOD = (data)=>{
    const apodCard = document.querySelector("div.apiContent");
    apodCard.innerHTML = '<h3 class="apod-title" style="color:red">'+data.title+'<h3>'+
                            '<img src = "'+data.url+'" title="'+data.title+'"class="image">';
}
const displayErrorMessage = (error) =>{
    const apodCard = document.querySelector('div.apiContent');
    apodCard.innerHTML = '<h3 class="apod-title">'+ error + ' </h3>';
}