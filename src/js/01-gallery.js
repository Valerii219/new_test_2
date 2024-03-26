import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if(e.target.nodeName !== 'IMG'){
    return;
}
  const bigImage = e.target.dataset.source;
  const instance = basicLightbox.create(`
<img
  class="gallery__image"
  src="${bigImage}"
/>
`);
  instance.show();
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
