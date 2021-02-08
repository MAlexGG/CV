let navButtons = [
    {
        id: 1,
        imgNav: "./img/inicio.svg",
        imgNavActive: "./inicio_activo.svg",
        nameNav: "inicio",
    },
    {
        id: 2,
        imgNav: "./img/datosPersonales.svg",
        imgNavActive: "./datosPersonales_activo.svg",
        nameNav: "datosPersonales",
    },
    {
        id: 3,
        imgNav: "./img/titulo.svg",
        imgNavActive: "./titulo_activo.svg",
        nameNav: "educación",
    },
    {
        id: 4,
        imgNav: "./img/experiencia.svg",
        imgNavActive: "./experiencia_activo.svg",
        nameNav: "experiencia",
    },
    {
        id: 5,
        imgNav: "./img/herramientas.svg",
        imgNavActive: "./herramientas_activo.svg",
        nameNav: "herramientas",
    },
    {
        id: 6,
        imgNav: "./img/idiomas.svg",
        imgNavActive: "./idiomas_activo.svg",
        nameNav: "idiomas",
    },
    
];


let buttonOff = "";

function navPrint() {
    for (let i = 0; i < navButtons.length; i++) {
        buttonOff += `<button class="navButton" id="navB" id="${navButtons[i].id}">
        <img id="navImg" src="${navButtons[i].imgNav}" class="icoButton" title="${navButtons[i].nameNav}">
        <div id="navEnv" class="envelopeFront"></div>
    </button>`
    }
}

navPrint();
document.querySelector("#nav").innerHTML = buttonOff;

