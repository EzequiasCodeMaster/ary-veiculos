const images = [
    'imagens/mobi-vermelho.png',
    'imagens/m-1.jpeg',
    'imagens/m-2.jpeg',
    'imagens/m-3.jpeg',
    'imagens/m-4.jpeg',
    'imagens/m-5.jpeg',
    'imagens/m-6.jpeg'
]; // Substitua com as URLs das imagens do carrossel

let currentIndex = 0;

function changeImage() {
    const carouselImages = document.querySelectorAll('.carousel-img'); // Seleciona todas as imagens com a classe 'carousel-img'
    
    carouselImages.forEach((carouselImg) => {
        currentIndex = (currentIndex + 1) % images.length; // Avança o índice da imagem
        carouselImg.src = images[currentIndex]; // Altera o src da imagem
    });
}

// Troca de imagem a cada 1 segundo (1000ms)
setInterval(changeImage, 1000);
