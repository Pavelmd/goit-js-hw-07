import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryPhotos) {
  return galleryPhotos.map(({preview, original}) => 
    
    ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="Image description"
      />
    </a>
  </li> `
  ).join('');

  
}
galleryContainer.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')) {
        return;
    }
    const selectedImage = event.target.getAttribute('data-source')

const instance = basicLightbox.create(`
<img src="${selectedImage}" width="800" height="600">
`)

instance.show()
galleryContainer.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        instance.close()
    }
})

}

console.log(galleryItems);
