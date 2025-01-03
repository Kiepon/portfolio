const textElement = document.getElementById('dev');
const texts = ["Python", "Backend", "Django"];
let index = 0;

textElement.textContent = texts[0];
textElement.classList.add("fade-out");

setTimeout(() => {
    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");
    setTimeout(() => {
        textElement.classList.remove("fade-in");
      }, 500);
}, 1);

setInterval(() => {
    textElement.classList.add("fade-out");
    setTimeout(() => {
        textElement.classList.remove("fade-out"); 
        index = (index + 1) % texts.length; 
        textElement.textContent = texts[index];
        textElement.classList.add("fade-in");
        setTimeout(() => {
            textElement.classList.remove("fade-in");
        }, 500); 
    }, 500);
}, 4000);