import { getAlbums } from "./getData.js";

export default async function albumsList() {
  const albums = await getAlbums();

  const albumsWrapper = document.createElement("div");
  albumsWrapper.classList.add("albums-wrapper");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Albums:";

  const albumsListElement = document.createElement("ul");
  albumsListElement.classList.add("albums-list");

  albums.forEach((album) => {
    const userName = album.user.name;
    const totalPhotos = album.photos.length;

    const albumItem = document.createElement("li");
    const albumLink = document.createElement("a");
    const userLink = document.createElement("a");
    const photosInTotal = document.createElement("span");
    const imgLink = document.createElement("a");
    const imgElement = document.createElement("img");

    userLink.textContent = userName;
    userLink.href = "./user.html?user_id=" + album.user.id;
    albumLink.textContent = `${album.id}. ${album.title}.`;
    albumLink.href = "./album.html?album_id=" + album.id;
    photosInTotal.textContent = `(${totalPhotos} photos)`;
    imgElement.setAttribute("src", album.photos[0].thumbnailUrl);
    imgLink.href = "./album.html?album_id=" + album.id;

    imgLink.append(imgElement);

    albumItem.append(albumLink, " Author: ", userLink, photosInTotal, imgLink);

    albumsListElement.append(albumItem);
  });

  albumsWrapper.append(sectionTitle, albumsListElement);

  return albumsWrapper;
}
