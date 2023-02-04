import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const addListGallery = itemGallery(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", addListGallery);

galleryList.addEventListener("click", onOpenImg);

function itemGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

let instance;

function onOpenImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEskeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEskeyPress);
      },
    }
  );

  instance.show();
}

function onEskeyPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
