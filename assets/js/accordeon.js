const handleAccordeonClick = (button) => {
    let buttonList = button.parentNode.getElementsByTagName('li');
    [...buttonList].forEach(item => item.classList.remove("active"));
    // ativa somente o clicado
    button.classList.add("active");
}

//Accordeon
var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener("click", toggleItem, false);
    }
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = "accordionItem close";
    }
    if (itemClass == "accordionItem close") {
        this.parentNode.className = "accordionItem open";
    }
}