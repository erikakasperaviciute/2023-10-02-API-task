import { getUsers } from "./getData.js";
import usersList from "./usersList.js";

async function init() {
  const users = await getUsers();

  const contentElement = document.querySelector("#content");
  const usersListElement = await usersList();

  contentElement.append(usersListElement);
}

init();
