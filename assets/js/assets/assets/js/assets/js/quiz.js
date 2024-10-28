function startQuiz() {
    const question = prompt("Tebak huruf apa yang sedang dimainkan?");
    if (question.toLowerCase() === currentLetter.toLowerCase()) {
        alert("Tebakan benar!");
    } else {
        alert("Salah! Coba lagi.");
    }
}