const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const selectedIndex = null;



imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src =` ./gallery/picture-${i}.jpg`;
    image.alt = `Food image number ${i} of the Lake House Bistro`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        //popup image
        popup.style.transform = `translateY(0)`;
        selectedImage.src = ` ./gallery/picture-${i}.jpg`;
        selectedImage.alt = `Food image number ${i} of the Lake House Bistro`;

    })

    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alr = '';
});

