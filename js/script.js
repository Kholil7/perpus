// Dapatkan elemen checkbox dan simpan dalam variabel
var menuToggle = document.getElementById('menu-toggle');

// Tambahkan event listener untuk perubahan pada checkbox
menuToggle.addEventListener('change', function() {
    // Dapatkan elemen menu dan simpan dalam variabel
    var menu = document.querySelector('nav .menu');
    
    // Periksa apakah checkbox dicentang atau tidak
    if (this.checked) {
        // Jika dicentang, tampilkan menu
        menu.style.display = 'block';
    } else {
        // Jika tidak dicentang, sembunyikan menu
        menu.style.display = 'none';
    }
});

// viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var quotes = document.querySelector('.quotes');
    if (isInViewport(quotes)) {
        quotes.classList.add('fade-up');
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});