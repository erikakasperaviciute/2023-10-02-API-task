function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const userId = urlParams.get("user_id");

  const contentElement = document.querySelector("#content");

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)
    .then((res) => res.json())
    .then((user) => {
      console.log(user);
      const userName = user.name;
      const totalPosts = user.posts.length;

      const userTitle = document.createElement("h1");
      userTitle.textContent = `${userId}. ${userName}`;

      const postsInTotal = document.createElement("span");
      postsInTotal.textContent = ` (${totalPosts} posts)`;

      userTitle.append(postsInTotal);

      contentElement.append(userTitle);
    });
}

init();
