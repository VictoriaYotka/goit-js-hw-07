import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');


const createGalleryMarkup = (arr) => {
    const galleryInnerMarkup = arr.map(el => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
            <img
              class="gallery__image"
              src="${el.preview}"
              data-source="${el.original}"
              alt="${el.description}"
            />
          </a>
        </div>`
    }).join('');

return galleryEl.insertAdjacentHTML('afterbegin', galleryInnerMarkup);
};



const handlerOnImageClick = (event) => {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${event.target.dataset.source}" width="800" height="600">
    `)
    
    instance.show();
    

    const handlerOnEscClick = (event) => {
        if(event.code !== 'Escape') {
            return;
        }
    
        instance.close();

        window.removeEventListener('keydown', handlerOnEscClick);
    };


    if(instance.visible()){
    window.addEventListener('keydown', handlerOnEscClick)  
    }
};


createGalleryMarkup(galleryItems);

galleryEl.addEventListener('click', handlerOnImageClick);



// console.log(galleryItems);
