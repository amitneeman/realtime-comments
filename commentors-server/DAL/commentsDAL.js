const Comment = require('../models/comment');

const getCommentsBySubject = (subject)=>{
    return Comment.find({subject});
}

const getCommentById = (_id) => {
    return Comment.findById(_id);
}

const addReplayToComment = async (commentId,replayData) =>{
    let comment = null;
    try{
        comment = await getCommentById(commentId);
    }catch(err){
        throw err;
    }


    comment.replies.push({
        ...replayData,
        subject: comment._id,
        replies: []
    });

    return comment.save();
}

const addComment = (commentData)=>{
    let comment = new Comment({
        ...commentData,
        replies: []
    });
    return comment.save();
}

module.exports = {
    getCommentsBySubject,
    addComment,
    addReplayToComment
};