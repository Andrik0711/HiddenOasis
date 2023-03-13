//Element.gwtBoundingClientRect(): El método devuelve el tamaño de un elemento y su posición relativa a la ventana gráfica

//document.getElementById Devuelve una referencia al elemento por su ID
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//close links 
//document.querySelector Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const link = document.querySelector(".links");

//Navegación
navToggle.addEventListener("click", function () {
    //El método Element.getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización(viewport).
    const linksHeight = link.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

});


//  fixed navbar 
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

//scroll
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().Rect;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    //setup back to top link
    if (scrollHeight > 500) {
        console.log("hello");
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        //close
        linksContainer.style.height = 0
    });

});

//carrucel de imagenes

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}