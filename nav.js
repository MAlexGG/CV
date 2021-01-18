let navButtons = [
    {
        imgNav: "./img/inicio.svg",
        imgNavActive: "./inicio_activo.svg",
        nameNav: "Inicio",
    },
    {
        imgNav: "./img/datosPersonales.svg",
        imgNavActive: "./datosPersonales_activo.svg",
        nameNav: "Datos Personales",
    },
    {
        imgNav: "./img/titulo.svg",
        imgNavActive: "./titulo_activo.svg",
        nameNav: "Educación",
    },
    {
        imgNav: "./img/experiencia.svg",
        imgNavActive: "./experiencia_activo.svg",
        nameNav: "Experiencia",
    },
    {
        imgNav: "./img/herramientas.svg",
        imgNavActive: "./herramientas_activo.svg",
        nameNav: "Herramientas",
    },
    {
        imgNav: "./img/idiomas.svg",
        imgNavActive: "./idiomas_activo.svg",
        nameNav: "Idiomas",
    },
    
];


let buttonOff = "";

function navPrint() {
    for (let i = 0; i < navButtons.length; i++) {
        buttonOff += `<button class="navButton">
        <img src="${navButtons[i].imgNav}" class="icoButton">
        <div class="envelopeFront"></div>
    </button>`
    }
}

navPrint();
document.querySelector("nav").innerHTML = buttonOff;



let buttonOn = "";

function