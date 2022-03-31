var lever = true;

document.getElementById('hamburger').addEventListener('click', hide);

window.addEventListener('resize', resizing);

title();

var navbar = document.getElementById("navbar");
var menu = document.getElementById("ul");

window.onscroll = function() {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


function hide() {
    var list = document.getElementsByClassName('list');
    for (var i = 0; i < list.length; i++) {
        if (lever) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
    var spanik = document.getElementsByClassName('spanik');
    for (var i = 1; i < spanik.length; i++) {
        if (lever) {
            spanik[i].style.display = 'inline-block';
        } else {
            spanik[i].style.display = 'none ';
        }
    }
    lever = !lever;
}

const links = document.querySelectorAll("#navbar ul a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    var width = document.getElementById('body').offsetWidth;
    if (width <= 766) {
        scroll({
            top: offsetTop - 350,
            behavior: "smooth"
        });
        hide();
    } else {
        scroll({
            top: offsetTop - 50,
            behavior: "smooth"
        });
    }
}

function title() {
    var width = document.getElementById('body').offsetWidth;
    const about = document.getElementById("li_about");
    const lectures = document.getElementById("li_lectures");
    const results = document.getElementById("li_results");
    const exercises = document.getElementById("li_exercises");
    const contact = document.getElementById("li_contact");
    const related = document.getElementById("li_related");

    if (width > 767 && width < 991) {
        about.title = 'O předmětu';
        lectures.title = 'Přednášky';
        results.title = 'Výsledky';
        exercises.title = 'Cvičení';
        contact.title = 'Kontakt';
        related.title = 'Související';
    }
    if (width > 991) {
        about.title = '';
        results.title = '';
        exercises.title = '';
        contact.title = '';
        related.title = '';
    }
}


function resizing() {
    var width = document.getElementById('body').offsetWidth;
    title();

    if (width <= 766) {
        var list = document.getElementsByClassName('list');
        for (var i = 0; i < list.length; i++) {
            list[i].removeAttribute('style');
        }
    }
    if (width > 767 && width < 991) {
        var list = document.getElementsByClassName('list');
        for (var i = 0; i < list.length; i++) {
            list[i].removeAttribute('style');
        }
        var spanik = document.getElementsByClassName('spanik');
        for (var i = 0; i < spanik.length; i++) {
            spanik[i].removeAttribute('style');
        }
    }
    if (width > 991) {
        var spanik = document.getElementsByClassName('spanik');
        for (var i = 0; i < spanik.length; i++) {
            spanik[i].removeAttribute('style');
        }
    }
}