import { getAlbumPhotos } from "./getData.js";
import albumPhotosList from "./photosList.js";

async function init() {
  const albumPhotos = await getAlbumPhotos();

  const contentElement = document.querySelector("#content");
  const photosListElement = await albumPhotosList();

  contentElement.append(photosListElement);
}

init();
