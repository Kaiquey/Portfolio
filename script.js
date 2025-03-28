const words = ["Web Developer.", "FullStack Developer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delayAfterTyping = 1500;

function typeEffect() {
  const typingElement = document.querySelector(".writer");
  const ElementSpan = document.querySelector(".writer");
  ElementSpan.style.color = "rgba(72, 105, 225, 0.8)";
  ElementSpan.style.fontSize = '20px';
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayAfterTyping);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();


var container = document.getElementById('IdContainer');
var navegateText = document.getElementsById('conteudo');
var corpao = document.getElementsById('corpo');

var deslize = false

function barNavegate(){
  barNavegate = ! barNavegate;
  if (deslize) {
    navegateText.style.marginLeft = '-10vw';
    navegateText.style.animationName = 'deslize';
    corpao.style.filter = 'blur(3px)';
  } else {
   navegateText.style.marginLeft = '-100vw';
   navegateText.style.animationName = '';
   corpao.style.filter = 'blur(0px)';
  }

}