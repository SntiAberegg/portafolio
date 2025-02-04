document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.navbar').classList.remove('active');
    });
});