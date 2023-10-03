import { getPosts } from "./getData.js";
import postsList from "./postsList.js";
import navLinks from "./navigationLinks.js";

async function init() {
  const posts = await getPosts();

  const contentElement = document.querySelector("#content");
  const postsListElement = await postsList();

  contentElement.append(postsListElement);
}

init();
navLinks();
