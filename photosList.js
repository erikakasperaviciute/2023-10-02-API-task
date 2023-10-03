import { getAlbumPhotos, getAlbums } from "./getData.js";

export default async function albumPhotosList() {
  const albums = await getAlbums();
  //   const albumPhotos = await getAlbumPhotos();

  const photosWrapper = document.createElement("div");
  photosWrapper.classList.add("photos-wrapper");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Photos:";

  const photosListElement = document.createElement("ul");
  photosListElement.classList.add("photos-list");

  for (const album of albums) {
    const albumPhotos = await getAlbumPhotos(album.id);
    albumPhotos.forEach((photo) => {
      console.log(photo);
      const photoItem = document.createElement("li");
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", photo.thumbnailUrl);
      photoItem.append(imgElement);

      photosListElement.append(photoItem);
    });
  }
  photosWrapper.append(sectionTitle, photosListElement);

  return photosWrapper;
}
