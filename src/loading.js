// Tela de carregamento
document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(function () {
        var loader = document.getElementById("loader");
        loader.style.display = "none";
        var contentContainer = document.querySelector(".content-container");
        contentContainer.style.display = "flex";

        var contentMain = document.querySelector(".content-main");
        contentMain.style.display = "flex";

        var contentFooter = document.querySelector(".content-footer");
        contentFooter.style.display = "block";
    }, 2000); 
});


