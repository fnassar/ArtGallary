// elements
let home;
let statment;

window.addEventListener('load', () => {
    home = document.getElementById('homePage');
    statment = document.getElementById('statment');
    home.style.display = "flex";
    statment.style.display = "none";
    console.log(home);

    home.addEventListener('click', () => {
        home.style.display = "none";
        statment.style.display = "flex";
    })

    statment.addEventListener('click', () => {
        window.location = "./gallery.html";
    })
})