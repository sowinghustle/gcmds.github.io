
// SCRIPT DA ANIMAÇÃO DO H1
window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    let a = document.getElementsByClassName('sequence');
    for (let i = 0; i < a.length; i++) {
        let $this = a[i];
        let letter = $this.innerHTML;
        letter = letter.trim();
        let str = '';
        let delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    let a = document.getElementsByClassName('random');
    for (let i = 0; i < a.length; i++) {
        let $this = a[i];
        let letter = $this.innerHTML;
        letter = letter.trim();
        let delay = 70;
        let delayArray = new Array;
        let randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                let random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            let str = '';
            let index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SCRIPT DE INICIALIZAÇÃO DO SWIPER
const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});





// Select the images within the project__img container
const images = document.querySelectorAll('#imgSlide');
const images2 = document.querySelectorAll('#imgSlide2');
// Set initial index
let currentIndex = 0;

function startSlideshow() {
  // Hide all images
  images.forEach(img => img.style.display = 'none');
  images2.forEach(img => img.style.display = 'none');
  // Show the current image
  images[currentIndex].style.display = 'block';
  images2[currentIndex].style.display = 'block';
  // Increment index for the next image
  currentIndex++;

  // Check if currentIndex exceeds the number of images
  if (currentIndex >= images.length || currentIndex >= images2.length) {
    // If currentIndex exceeds the number of images, reset it to 0
    currentIndex = 0;
  }
  // Call the function recursively after a delay (e.g., 3 seconds)
  setTimeout(startSlideshow, 5000); // Change 3000 to your desired interval in milliseconds
}

startSlideshow();

  
