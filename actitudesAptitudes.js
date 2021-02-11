function secondTab(){
    let tab = document.getElementById("secondTab");

    if (navigator.userAgent.match(/iPad/i) || (navigator.userAgent.match(/Android/i))){
        tab.style.height = "100vh";
        tab.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.25)";    
    };
    
    setTimeout(deleteTab, 10000);
    console.log(tab);
};

function deleteTab(){
    let tab = document.getElementById("secondTab");
    tab.style.height = "10vh";
    tab.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
}
