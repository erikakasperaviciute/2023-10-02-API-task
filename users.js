import { getUsers } from "./getData.js";
import usersList from "./usersList.js";
import navLinks from "./navigationLinks.js";

async function init() {
  // const users = await getUsers();

  const contentElement = document.querySelector("#content");
  const usersListElement = await usersList();

  contentElement.append(usersListElement);
}

init();
navLinks();
