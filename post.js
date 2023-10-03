function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const postId = urlParams.get("post_id");

  const contentElement = document.querySelector("#content");

  fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`
  )
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      const userName = post.user.name;
      const userId = post.userId;
      const totalComments = post.comments.length;

      const postTitle = document.createElement("h1");
      postTitle.textContent = `${post.id}. ${post.title}. `;

      const author = document.createElement("span");
      const authorLink = document.createElement("a");
      authorLink.textContent = userName;
      authorLink.href = "./user.html?user_id=" + userId;

      const commentsInTotal = document.createElement("span");
      commentsInTotal.textContent = `(${totalComments} comments)`;

      author.append("Author: ", authorLink);
      postTitle.append(commentsInTotal);

      contentElement.append(postTitle, author);
    });
}

init();
