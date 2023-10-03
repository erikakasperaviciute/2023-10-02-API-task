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

      const postTitle = document.createElement("h1");
      postTitle.textContent = `${post.id}. ${post.title}. `;

      const author = document.createElement("span");
      const authorLink = document.createElement("a");
      authorLink.textContent = userName;
      authorLink.href = "./user.html?user_id=" + userId;
      const postContent = document.createElement("p");
      postContent.textContent = post.body;

      const commentsWrapper = document.createElement("div");
      const commentsSectionTitle = document.createElement("h2");
      commentsSectionTitle.textContent = "Comments:";
      const commentsList = document.createElement("ul");
      commentsList.classList.add("comments-list");

      const otherPostsLink = document.createElement("a");
      otherPostsLink.textContent = "Other posts by the author";
      otherPostsLink.href = "./user.html?user_id=" + userId;

      post.comments.forEach((comment) => {
        const commentItem = document.createElement("li");
        const commentTitle = document.createElement("h4");
        commentTitle.textContent = comment.name;
        const commentContent = document.createElement("p");
        commentContent.textContent = comment.body;
        const commentAuthorEmail = document.createElement("span");
        commentAuthorEmail.textContent = comment.email;

        commentItem.append(commentTitle, commentContent, commentAuthorEmail);
        commentsList.append(commentItem);
      });

      commentsWrapper.append(
        commentsSectionTitle,
        commentsList,
        otherPostsLink
      );

      author.append("Author: ", authorLink);

      contentElement.append(postTitle, author, postContent, commentsWrapper);
    });
}

init();
