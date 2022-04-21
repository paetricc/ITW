// proměnná indikující stav hamburger menu
let lever = true;

// získání potřebných  hodnot z html souboru
const navbar = document.getElementById("navbar");
const menu = document.getElementById("ul");
const as = document.querySelectorAll("#navbar ul a");
const list = document.getElementsByClassName("list");

// přidání event listenerů
document.getElementById('hamburger').addEventListener('click', hide);
window.addEventListener('resize', resizing);
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener("click", click);
}

// funkce uskutečňující změnu pozadí menu
window.onscroll = function () {
    // pokud je počet scrollnutých pixelů větší než odsazení menu od vrcholu stránky, tak změň pozadí
    if (scrollY > menu.offsetTop) {
        navbar.setAttribute('style', 'background-color: #112D32');
    } else {
        navbar.setAttribute('style', 'background-color: transparent');
    }
}

// Funkce zajišťující správné schování navigačního menu při kliknutí na odkaz
function click() {
    let width = document.getElementById('home').offsetWidth;
    const att = this.getAttribute("href");
    if (att.localeCompare("#home") === 0 && scrollY !== 0) {
        // Aby se správně skrývalo navigační menu při kliknutí na HOME
        if (width <= 1023) {
            if (lever) {
                hide();
                hide();
            } else {
                hide();
            }
        }
    } else {
        if (width <= 1023) {
            // skryjeme navigační menu pokud je potřeba
            hide();
        }
    }
}

// Funkce, jejímž účelem je schování navigačního menu
function hide() {
    let i;
    for (i = 0; i < list.length; i++) {
        if (lever) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
    lever = !lever;
}

// Funkce zajišťující správné zobrazení hamburger menu
function resizing() {
    let i;
    let width = document.getElementById('home').offsetWidth;

    if (width < 1024) {
        for (i = 0; i < list.length; i++) {
            list[i].removeAttribute('style');
        }
    }
}