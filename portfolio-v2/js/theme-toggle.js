const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    document.body.className = savedTheme;
}

updateIcon();

themeToggle.addEventListener("click", () => {

    if(document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme","light-theme");
    }else{
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme","dark-theme");
    }

    updateIcon();

});

function updateIcon(){

    if(document.body.classList.contains("dark-theme")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

}
