import navLinks from "./navigationLinks.js";
import albumsList from "./albumsList.js";

async function init() {
  //   const albums = await getAlbums();

  const contentElement = document.querySelector("#content");
  const albumsListElement = await albumsList();

  contentElement.append(albumsListElement);
}

init();
navLinks();
