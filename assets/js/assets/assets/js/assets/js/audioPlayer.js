function playAudio(letter) {
    const audio = new Audio(`assets/audio/${letter}.mp3`);
    audio.play();
}