let brochureDownloadBtn = document.querySelector('.brochure-download-btn');
let brochureDownloadBlock = document.querySelector('.brochure-download');
let brochureDownloadForm = document.querySelector('.brochure-download__form');

let brochureDownloadCross = document.querySelector('.brochure-download__cross');

brochureDownloadBtn.addEventListener('click', showBrochureDownloadForm);
function showBrochureDownloadForm() {
    brochureDownloadBtn.classList.add('brochure-download-btn--hidden');
    brochureDownloadBlock.classList.add('brochure-download--bg');
    brochureDownloadForm.classList.remove('brochure-download__form--hidden');
}

brochureDownloadCross.addEventListener('click', closeBrochureDownloadForm);
function closeBrochureDownloadForm() {
    brochureDownloadBtn.classList.remove('brochure-download-btn--hidden');
    brochureDownloadBlock.classList.remove('brochure-download--bg');
    brochureDownloadForm.classList.add('brochure-download__form--hidden');
}