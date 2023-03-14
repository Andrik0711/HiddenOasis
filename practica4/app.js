//Tabs
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const aboutImg = document.querySelector('.about-img img');
const newImgSrc1 = './images/upvlogo.png'
const newImgSrc2 = './images/upvlogo3.jpg'
const newImgSrc3 = './images/upvlogo2.png'

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //Remover seleccionado
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        //mostrar otros artículos
        articles.forEach(function (article) {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");

        if (id == "Historia") {
            aboutImg.src = newImgSrc1;
        } else if (id == "vision") {
            aboutImg.src = newImgSrc2;
        } else if (id == "mision") {
            aboutImg.src = newImgSrc3;
        }
    }
});


//Galeria
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
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
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
