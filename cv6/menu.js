var lever = true;
document.getElementById('hamburger').addEventListener('click', hide);

window.addEventListener('resize', resizing);

function hide() {
    var list = document.getElementsByClassName('list');
    for (var i = 1; i < list.length; i++) {
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

function resizing() {
    var width = this.window.screen.availWidth;
    if (width < 766) {
        var list = document.getElementsByClassName('list');
        for (var i = 1; i < list.length; i++) {
            list[i].removeAttribute('style');
        }
    }
    if (width > 767 && width < 991) {
        var list = document.getElementsByClassName('list');
        for (var i = 1; i < list.length; i++) {
            console.log(i);
            list[i].removeAttribute('style');
        }
        var spanik = document.getElementsByClassName('spanik');
        for (var i = 1; i < spanik.length; i++) {
            spanik[i].removeAttribute('style');
        }
    }
    if (width > 991) {
        var spanik = document.getElementsByClassName('spanik');
        for (var i = 1; i < spanik.length; i++) {
            spanik[i].removeAttribute('style');
        }
    }
}