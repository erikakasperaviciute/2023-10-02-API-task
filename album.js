async function init() {
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

  allAlbumPhotos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", photo.thumbnailUrl);
    console.log(imgElement);
    contentElement.after(imgElement);
  });

  author.append("Author: ", authorLink);

  contentElement.append(albumTitle, author);
}

init();
