function changeBackgroundColor() {
    const body = document.body;
    const h1 = document.querySelector('h1');
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        h1.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        h1.style.color = 'white';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    window.location.href = 'post.html';
});
