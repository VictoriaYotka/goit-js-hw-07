import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const createGalleryMarkup = (arr) => {
    return arr.map(el => {
return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    }).join('');
}

galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems))


const lightbox = new SimpleLightbox('.gallery__item', {
     captionsData: "alt",
     captionDelay: 250,
});
