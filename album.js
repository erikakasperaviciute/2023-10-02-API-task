async function getAlbum() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const albumId = urlParams.get("album_id");

  const contentElement = document.querySelector("#content");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`
  );
  const album = await res.json();

  console.log(album);
  const userName = album.user.name;
  const userId = album.userId;
  const allAlbumPhotos = album.photos;

  const albumTitle = document.createElement("h1");
  albumTitle.textContent = `${album.id}. ${album.title}. `;

  const author = document.createElement("span");
  const authorLink = document.createElement("a");
  authorLink.textContent = userName;
  authorLink.href = "./user.html?user_id=" + userId;

  const galleryElement = document.createElement("div");
  galleryElement.id = "my-gallery";
  galleryElement.classList.add("pswp-gallery");

  const figureElement = document.createElement("figure");

  galleryElement.append(figureElement);

  allAlbumPhotos.forEach((photo) => {
    const imgLink = document.createElement("a");
    imgLink.href = photo.url;
    imgLink.setAttribute("dataSize", "width-1xheight-1");
    imgLink.dataset.pswpHeight = "600";
    imgLink.dataset.pswpWidth = "600";
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", photo.thumbnailUrl);
    imgLink.append(imgElement);
    figureElement.append(imgLink);
  });

  author.append("Author: ", authorLink);

  contentElement.append(albumTitle, author, galleryElement);
}

getAlbum();
