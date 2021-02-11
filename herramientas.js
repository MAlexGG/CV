let toolsList = [
    {
        id: 1,
        nameTool: "HTML5",
        percentage: 60
    },
    {
        id: 2,
        nameTool: "CSS3",
        percentage: 60
    },
    {
        id: 3,
        nameTool: "Javascript",
        percentage: 30
    },
    {
        id: 4,
        nameTool: "Figma",
        percentage: 70
    },
    {
        id: 5,
        nameTool: "Visual Studio Code",
        percentage: 70
    },
    {
        id: 6,
        nameTool: "Github",
        percentage: 65
    },
    {
        id: 7,
        nameTool: "Bitbucket",
        percentage: 40
    },
    {
        id: 8,
        nameTool: "Jira",
        percentage: 35
    },
    {
        id: 9,
        nameTool: "Trello",
        percentage: 60
    },
    {
        id: 10,
        nameTool: "Miro",
        percentage: 50
    },
    {
        id: 11,
        nameTool: "Wordpress",
        percentage: 30
    },
    {
        id: 12,
        nameTool: "Vue.js",
        percentage: 5
    },
    {
        id: 13,
        nameTool: "Angular",
        percentage: 5
    },

    {
        id: 14,
        nameTool: "Adobe Photoshop",
        percentage: 80
    },
    {
        id: 15,
        nameTool: "Adobe Illustrator",
        percentage: 90
    },
    {
        id: 16,
        nameTool: "Adobe InDesign",
        percentage: 50
    },
    {
        id: 17,
        nameTool: "Google SketchUp",
        percentage: 70
    },
    {
        id: 18,
        nameTool: "Vray",
        percentage: 50
    },
    {
        id: 19,
        nameTool: "Microsoft Office",
        percentage: 90
    },
    {
        id: 20,
        nameTool: "Autocad",
        percentage: 95
    },
    {
        id: 21,
        nameTool: "Qgis",
        percentage: 50
    },
    {
        id: 22,
        nameTool: "Revit",
        percentage: 30
    },
    {
        id: 23,
        nameTool: "Arcmap",
        percentage: 40
    },

];

let tool ="";

function toolPrint() {
    for(let i = 0; i < toolsList.length; i++){
        tool += `<p class="txtBarra" id="barContainer">${toolsList[i].nameTool}</p>
        <div class="barraContenedora">
            <div class="barra" style="width:${toolsList[i].percentage}%"></div>
        </div>` 
    }
}

toolPrint();
document.querySelector('.datosHerramientas').innerHTML = tool;


