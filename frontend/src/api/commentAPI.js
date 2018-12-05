let commentAPI = {};

commentAPI.getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["getComments"]);
    }, 1500);
  });
};

commentAPI.addComment = commentData => {
  console.log("addComment", commentData);
};

commentAPI.delComment = commentId => {
  console.log("delComment", commentId);
};

export default commentAPI;
