let navButtons = [
    {
        id: 1,
        imgNav: "./img/inicio.svg",
        imgNavActive: "./inicio_activo.svg",
        nameNav: "Inicio",
    },
    {
        id: 2,
        imgNav: "./img/datosPersonales.svg",
        imgNavActive: "./datosPersonales_activo.svg",
        nameNav: "Datos Personales",
    },
    {
        id: 3,
        imgNav: "./img/titulo.svg",
        imgNavActive: "./titulo_activo.svg",
        nameNav: "Educación",
    },
    {
        id: 4,
        imgNav: "./img/experiencia.svg",
        imgNavActive: "./experiencia_activo.svg",
        nameNav: "Experiencia",
    },
    {
        id: 5,
        imgNav: "./img/herramientas.svg",
        imgNavActive: "./herramientas_activo.svg",
        nameNav: "Herramientas",
    },
    {
        id: 6,
        imgNav: "./img/idiomas.svg",
        imgNavActive: "./idiomas_activo.svg",
        nameNav: "Idiomas",
    },
    
];


let buttonOff = "";

function navPrint() {
    for (let i = 0; i < navButtons.length; i++) {
        buttonOff += `<button class="navButton" id="navButton">
        <img src="${navButtons[i].imgNav}" id="${navButtons[i].id}" class="icoButton" title="${navButtons[i].nameNav}">
        <div class="envelopeFront"></div>
    </button>`
    }
}

navPrint();
document.querySelector("nav").innerHTML = buttonOff;

