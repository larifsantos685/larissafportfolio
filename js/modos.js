const changeThemeBtn = document.querySelector("#change-theme")


// toggle dark mode
function toggleLightMode() {
    document.body.classList.toggle("light");

   
}

// Carregando modo light ou dark 

function loadTheme() {
    const lightMode = localStorage.getItem("light")

    if(lightMode) {
        toggleLightMode();
    }
}

loadTheme();


changeThemeBtn.addEventListener("change", function() {
   toggleLightMode(); 

   //salvar modo escuro ou claro na pagina

   localStorage.removeItem("light");

   if (document.body.classList.contains("light")) {
    localStorage.setItem("light", 1);
   }

})