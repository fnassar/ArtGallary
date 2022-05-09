// elements
let home;
let pdf;

window.addEventListener('load', () => {
    home = document.getElementById('homePage');
    pdf = document.getElementById('pdf');
    home.style.display = "flex";
    pdf.style.display = "none";
    console.log(home);

    home.addEventListener('click', () => {
        home.style.display = "none";
        pdf.style.display = "flex";
    })

    pdf.addEventListener('click', () => {
        window.location = "./gallery.html";
    })
})