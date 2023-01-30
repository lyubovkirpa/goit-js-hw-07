import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const addListGallery = itemGallery(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", addListGallery);

galleryList.addEventListener("click", onOpenImg);
galleryList.addEventListener("keydown", onCloseImg);

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

function onOpenImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.getAttribute("data-source")}">
  `);
  instance.show();
}

function onCloseImg(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
