let brochureDownloadBtn = document.querySelector('.brochure-download-btn');
let brochureDownloadBlock = document.querySelector('.brochure-download');
let brochureDownloadForm = document.querySelector('.brochure-download__form');
let brochureDownloadModalOverlay = document.querySelector('.modal-overlay');
let pointsOnMap = document.querySelectorAll('.page-content__item');

let brochureDownloadCross = document.querySelector('.brochure-download__cross');

brochureDownloadBtn.addEventListener('click', showBrochureDownloadForm);
function showBrochureDownloadForm() {
    brochureDownloadBtn.classList.add('brochure-download-btn--hidden');
    brochureDownloadBlock.classList.add('brochure-download--bg');
    brochureDownloadForm.classList.remove('brochure-download__form--hidden');
    brochureDownloadModalOverlay.classList.add('modal-overlay--active')
    brochureDownloadModalOverlay.classList.remove('modal-overlay--hidden')
}

brochureDownloadCross.addEventListener('click', closeBrochureDownloadForm);
brochureDownloadModalOverlay.addEventListener('click', closeBrochureDownloadForm);
function closeBrochureDownloadForm() {
    brochureDownloadBtn.classList.remove('brochure-download-btn--hidden');
    brochureDownloadBlock.classList.remove('brochure-download--bg');
    brochureDownloadForm.classList.add('brochure-download__form--hidden');
    brochureDownloadModalOverlay.classList.remove('modal-overlay--active')
    brochureDownloadModalOverlay.classList.add('modal-overlay--hidden')
}

// Parallax for the image
const pageContent = document.querySelector('.page-content');

function handleMove(event) {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    const mouseX = (clientX / window.innerWidth) * 100;
    const mouseY = (clientY / window.innerHeight) * 100;

    pageContent.style.backgroundPosition = `${mouseX}% ${mouseY}%`;

    pointsOnMap.forEach((el) => {
        el.style.transform = `translateY(${-mouseY * 1.3}px)`;
    })

    console.log(`${mouseX}% ${mouseY}%`);
}

window.addEventListener('mousemove', handleMove);
window.addEventListener('touchmove', handleMove);
