let botones = document.querySelectorAll(".navButton");
let pages = document.querySelectorAll(".firstPage");


botones.forEach(function(boton){
    boton.addEventListener('click', function(){
        pages.forEach(function(page){
            if(page.style.display == "block"){
                page.style.display = "none"
            };
            if(boton.firstElementChild.title === page.dataset.name){
                page.style.display = "block"
            };  
            //if(boton.firstElementChild.src !== "activo"){
            //    boton.firstElementChild.src = "./img/herramientas_activo.svg";
            //}  BUSCAR ALGO DEL DATA SET

               
        });  

        boton.classList.remove("navButton");
        boton.classList.add("navButtonActive");
        //boton.lastElementChild.remove("envelopeFront");
       
        

    });
});

