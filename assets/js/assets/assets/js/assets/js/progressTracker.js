function saveProgress(letter) {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];
    if (!progress.includes(letter)) {
        progress.push(letter);
        localStorage.setItem('progress', JSON.stringify(progress));
    }
}

function getProgress() {
    return JSON.parse(localStorage.getItem('progress')) || [];
}