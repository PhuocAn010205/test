document.addEventListener('DOMContentLoaded', function() {
    const btnRight = document.querySelector('.btn__right');

    if (btnRight) {
        btnRight.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = './asset/page/page1.html'; // Navigate to page1.html
        });
    }
});
