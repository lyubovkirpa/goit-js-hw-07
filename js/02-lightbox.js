import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");
const pictureMarkup = onCreatePictureMarkup(galleryItems);

listGallery.insertAdjacentHTML("afterbegin", pictureMarkup);

listGallery.addEventListener("click", onOpenModal);

function onCreatePictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`;
    })
    .join("");
}

function onOpenModal(event) {
  event.preventDefault();

  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionPosition: "bottom",
  });
}
