function changeBackgroundColor() {
    const body = document.body;
    const h1 = document.querySelector('.typing-effect');
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        h1.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        h1.style.color = 'white';
    }
}