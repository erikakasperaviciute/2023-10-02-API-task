async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const userId = urlParams.get("user_id");

  const contentElement = document.querySelector("#content");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums&_embed=comments`
  );
  const user = await res.json();

  console.log(user);
  const userName = user.name;
  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;
  const street = user.address.street;
  const suite = user.address.suite;
  const city = user.address.city;
  const zip = user.address.zipcode;

  const userTitle = document.createElement("h1");
  userTitle.textContent = `${userId}. ${userName}`;
  const contactsInfoElement = document.createElement("div");
  contactsInfoElement.style.display = "flex";
  contactsInfoElement.style.flexDirection = "column";
  contactsInfoElement.style.gap = "8px";
  const username = document.createElement("span");
  username.textContent = `Username: ${user.username}`;
  const userEmail = document.createElement("span");
  userEmail.textContent = `Email: ${user.email}`;
  const addressLink = document.createElement("a");
  addressLink.href = `https://www.google.com/maps?q=${lat},${lng}`;
  console.log(addressLink.href);
  const userAddress = document.createElement("span");
  userAddress.textContent = `Address: ${street} str. ${suite}, ${city}, ${zip}.`;
  const userPhone = document.createElement("span");
  userPhone.textContent = `Phone: ${user.phone}`;
  const userWebsite = document.createElement("span");
  userWebsite.textContent = `Website: www.${user.website}`;
  const userWorkplace = document.createElement("span");
  userWorkplace.textContent = `Works at: ${user.company.name}`;

  const postsListElement = document.createElement("ul");
  postsListElement.classList.add("posts-list");
  const postsWrapper = document.createElement("div");
  postsWrapper.classList.add("posts-wrapper");

  const postsSectionTitle = document.createElement("h2");
  postsSectionTitle.textContent = "Posts:";

  user.posts.forEach((post) => {
    const postItem = document.createElement("li");
    const postLink = document.createElement("a");
    postLink.textContent = `${post.id}. ${post.title}.`;
    postLink.href = "./post.html?post_id=" + post.id;
    postItem.append(postLink);
    postsListElement.append(postItem);
  });

  postsWrapper.append(postsSectionTitle, postsListElement);

  const albumsListElement = document.createElement("ul");
  albumsListElement.classList.add("albums-list");
  const albumsWrapper = document.createElement("div");
  albumsWrapper.classList.add("albums-wrapper");

  const albumsSectionTitle = document.createElement("h2");
  albumsSectionTitle.textContent = "Albums:";

  user.albums.forEach((album) => {
    const albumItem = document.createElement("li");
    const albumLink = document.createElement("a");
    albumLink.textContent = `${album.id}. ${album.title}.`;
    albumLink.href = "./album.html?album_id=" + album.id;
    albumItem.append(albumLink);
    albumsListElement.append(albumItem);
  });

  albumsWrapper.append(albumsSectionTitle, albumsListElement);

  addressLink.append(userAddress);
  contactsInfoElement.append(
    username,
    userEmail,
    addressLink,
    userPhone,
    userWebsite,
    userWorkplace
  );

  contentElement.append(
    userTitle,
    contactsInfoElement,
    postsWrapper,
    albumsWrapper
  );
}

init();
