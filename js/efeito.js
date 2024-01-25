const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Larissa Fernanda"];
const textArray2 = ["Desenvolvedora Full-Stack"];
const combinedTextArray = [...textArray, '', ...textArray2]; // Adiciona uma string vazia entre os dois textos
const typingDelay = 200;
const erasingDelay = 160;
const newTextDelay = 100; // Ajuste este valor para diminuir o intervalo
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < combinedTextArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += combinedTextArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = combinedTextArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= combinedTextArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(combinedTextArray.length) setTimeout(type, newTextDelay + 100);
});