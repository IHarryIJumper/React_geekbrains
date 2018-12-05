
let commentAPI = {};

commentAPI.getComments = () => {
    return ["getComments"];
};

commentAPI.addComment = commentData => { 
    console.log("addComment", commentData);
};


commentAPI.delComment = (commentId) => { 
    console.log("delComment", commentId);
};


export default commentAPI;