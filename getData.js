export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();

  return users;
}

export async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=50&_expand=user"
  );
  const posts = await res.json();

  return posts;
}

export async function getAlbums() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=25&_expand=user&_embed=photos"
  );
  const albums = await res.json();

  return albums;
}

export async function getPhotos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=50"
  );
  const photos = await res.json();

  return photos;
}

export async function getAlbumPhotos(albumId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=50&_albumId=${albumId}"
  );
  const albumPhotos = await res.json();

  return albumPhotos;
}
