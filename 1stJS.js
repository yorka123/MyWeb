
const show_button = document.getElementById('show_button');
const swap_button = document.getElementById('swap_button');
const text_box = document.getElementById('text_box');
const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');

show_button.addEventListener('click', () => {
    if (text_box.style.display === 'none') {
        text_box.style.display = 'block';
    } else {
        text_box.style.display = 'none';
    }
});

swap_button.addEventListener('click', () => {
    if (paragraph1.style.display === 'none') {
        paragraph1.style.display = 'block';
        paragraph2.style.display = 'none';
    } else {
        paragraph1.style.display = 'none';
        paragraph2.style.display = 'block';
    }
});