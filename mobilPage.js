
function hideMain(x){
    let firstMain = document.getElementById("firstMain"); 
    let secondNav = document.getElementById("navMobil");
    if(x.matches){
        firstMain.style.display = "none";
        secondNav.style.display = "flex";
    } else {
        firstMain.style.display = "block";
        secondNav.style.display = "none";
    }
}

let x = window.matchMedia("(max-width: 575px)")
hideMain(x)
x.addListener(hideMain);



function dropUpP(){
    document.getElementById("dropP").classList.toggle("showTxt");

}

function dropUpA(){
    document.getElementById("dropA").classList.toggle("showTxt");
}