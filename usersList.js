import { getUsers } from "./getData.js";

export default async function usersList() {
  const users = await getUsers();

  const usersWrapper = document.createElement("div");
  usersWrapper.classList.add("users-wrapper");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Users:";

  const usersListElement = document.createElement("ul");
  usersListElement.classList.add("users-list");

  users.forEach((user) => {
    const userItem = document.createElement("li");
    const userLink = document.createElement("a");
    userLink.textContent = `${user.name}`;
    userLink.href = "./user.html?user_id=" + user.id;

    userItem.append(userLink);

    usersListElement.append(userItem);
  });

  usersWrapper.append(sectionTitle, usersListElement);

  return usersWrapper;
}
