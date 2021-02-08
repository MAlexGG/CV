let langList = [
    {
        id: 1,
        nameLang: "Castellano",
        percentage: 100
    },
    {
        id: 2,
        nameLang: "Inglés",
        percentage: 70
    },
    {
        id: 3,
        nameLang: "Catalán",
        percentage: 50
    },
    {
        id: 4,
        nameLang: "Francés",
        percentage: 30
    },

];

let lang = "";

function langPrint(){
    for(let i = 0; i < langList.length; i++){
        lang += `<p class="txtBarra">${langList[i].nameLang}</p>
        <div class="barraContenedora">
            <div class="barra" style="width:${langList[i].percentage}%"></div>
        </div>`
    }
}

langPrint();
document.querySelector('.datosIdiomas').innerHTML = lang;