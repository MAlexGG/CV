function cleanBody() {
    let firstTab = document.getElementById("firstTab");
    if (firstTab.style.display === "block") {
        firstTab.style.display = "none";  
    }
    else {
        firstTab.style.display = "block"
    }
};


function secondPage() {
    let secondTab = document.getElementById("secondTab");
    if (secondTab.style.display === "none") {
        secondTab.style.display = "block";
    }
    else {
        secondTab.style.display = "none"
    }
};

function changeTab() {
    cleanBody();
    secondPage();
}