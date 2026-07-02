
const image = document.querySelector('.clickable_img');
const popup = document.getElementById('popup');

image.addEventListener("click", (event)=>{
    const imgsrc = event.target.src;

    console.log(imgsrc);
    alert("Image URL: " + imgsrc);
});