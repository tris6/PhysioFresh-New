function OpenPage(idName) {
    var element = document.getElementById(idName);
    element.style.display = "flex";
    
    var page = document.getElementById("static-page");
    page.classList.add("blur");
    
    return;
}

function ClosePage(idName) {
    var element = document.getElementById(idName);
    element.style.display = "none";

    var page = document.getElementById("static-page");
    page.classList.remove("blur");

    return;
}