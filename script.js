const uploadInput = document.getElementById('upload');
const scrapbook = document.getElementById('scrapbook');

document.addEventListener('DOMContentLoaded', () => {
    loadImages();
});

uploadInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgSrc = e.target.result;
            addImageToScrapbook(imgSrc);
            saveImage(imgSrc);
        };
        reader.readAsDataURL(files[0]);
    }
});

function addImageToScrapbook(src) {
    const rotation = `${Math.random() * 30 - 15}deg`;
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    imgContainer.style.setProperty('--rotation', rotation);

    const img = document.createElement('img');
    img.src = src;

    imgContainer.appendChild(img);
    scrapbook.appendChild(imgContainer);
}

function saveImage(src) {
    let images = JSON.parse(localStorage.getItem('scrapbookImages')) || [];
    images.push(src);
    localStorage.setItem('scrapbookImages', JSON.stringify(images));
}

function loadImages() {
    const images = JSON.parse(localStorage.getItem('scrapbookImages')) || [];
    images.forEach(src => {
        addImageToScrapbook(src);
    });
}
