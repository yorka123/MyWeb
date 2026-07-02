
const images = document.querySelectorAll('.clickable_img');
const popup = document.getElementById('popup');
const selected_image = document.getElementById('selected_image');

const image_background = document.getElementById('image_background');

images.forEach((images) => {
    images.addEventListener("click", (event) => {
        const imgsrc = event.currentTarget.src;
        const imgalt = event.currentTarget.alt;
        selected_image.src = imgsrc;
        popup.style.display = "contents";
        image_background.style.visibility = "visible";
    });
});

popup.addEventListener("click", (event)=>{
    popup.style.display = "none";
    image_background.style.visibility = "hidden";
});