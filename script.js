const images = ['imagens/mobi-vermelho.png',
    'imagens/m-1.jpeg',
    'imagens/m-2.jpeg',
    'imagens/m-3.jpeg',
    'imagens/m-4.jpeg',
    'imagens/m-5.jpeg',
    'imagens/m-6.jpeg',]; // Substitua com as URLs das imagens do carrossel
let currentIndex = 0;

function changeImage() {
    const carouselImg = document.getElementById('carousel-img');
    currentIndex = (currentIndex + 5) % images.length;
    carouselImg.src = images[currentIndex];
}

// Troca de imagem a cada 1 segundo (1000ms)
setInterval(changeImage, 1000);
