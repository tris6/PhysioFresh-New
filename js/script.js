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

function DisplayNext(idName) {
    let number = idName.charAt(idName.length - 1);
    let element;


    if (number === "6") {
        element = document.getElementById("back-popup-results");
        element.style.display = "inherit";
        return;
    }

    number++;

    const numberlessID = idName.slice(0, -1);

    const nextID = numberlessID + number;

    element = document.getElementById(nextID);
    element.style.visibility = "visible";

    return;
}


