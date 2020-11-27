const keptuve = document.querySelector('.keptuve');
const lekste = document.querySelector('.lekste');

if (!keptuve) {
    console.error('Neradau keptuves 🤣');
}
if (!lekste) {
    console.error('Neradau lekstes 😒');
}


let blynuKiekis = 0;

// TODO: padaryti, jog sis eventListener butu uzdedamas tik jei randamas keptuves elementas
keptuve.addEventListener('click', () => {
    lekste.innerText = `${++blynuKiekis} blynų/-ai`;
})
