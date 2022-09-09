// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);


const containerGallery = document.querySelector('.gallery')
const cardsMarcup = galleryCardMarkup(galleryItems)

containerGallery.insertAdjacentHTML('beforeend', cardsMarcup)

// containerGallery.addEventListener('click', onContainerGalleryClick)

function galleryCardMarkup(galleryItems) {
    const markupSmalImage = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}" onclick="return false;"> 
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}).join('')

return markupSmalImage
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
  overlay: true,
  close: false,
  showCounter: false,
  fadeSpeed: 200,
});