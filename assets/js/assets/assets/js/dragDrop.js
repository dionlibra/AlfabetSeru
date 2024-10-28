const letters = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('drop-zone');

letters.forEach(letter => {
    letter.draggable = true;

    letter.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const letterId = e.dataTransfer.getData('text');
    const letter = document.getElementById(letterId);
    dropZone.appendChild(letter);
});