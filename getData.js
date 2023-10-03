export async function getUsers(params = "") {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params
  );
  const users = await res.json();

  return users;
}

export async function getPosts(params = "") {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=50&_expand=user" + params
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
