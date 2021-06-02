window.onload = function () {
    writeIntroText();
}

function writeIntroText() {
    setTimeout(function () {
        fading("intro-hi")
    }, 250);
    setTimeout(function () {
        fading("intro-name")
    }, 1200);
    ;
}

function fading(elem) {
    var increment = 0.045;
    var opacity = 0;
    var instance = window.setInterval(function () {
        document.getElementById(elem).style.opacity = opacity
        opacity = opacity + increment;
        if (opacity > 1) {
            window.clearInterval(instance);
        }
    }, 50)
}

var dropped = false;
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        nav.classList.add('navbar-darker');
    } else {
        if (!dropped) {
            nav.classList.remove('navbar-darker');
        }
    }
});

var ready = true;
function handleNavBackground() {

    if (ready) {
        if (window.pageYOffset <= 300) {
            nav.classList.toggle('navbar-darker');
        }
        dropped = !dropped;

        //Debounce
        ready = false;
        setTimeout(function () {
            ready = true;
        }, 200);
    }

}

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 500
    }, 500);

    return false;
});