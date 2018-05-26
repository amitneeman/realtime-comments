const commentsDAL = require('../DAL/commentsDAL');
var express = require('express');
var router = express.Router();

router.get('/:subject',async (req,res,next) => {
   try {
       const subject = req.params.subject;
       const comments = await commentsDAL.getCommentsBySubject(subject);
       res.json(comments);
   } catch (error) {
    res.status(500).send(error.message);
}
});

router.post('/',async (req,res,next) => {
    const {subject,user,content} = req.body;
    try{
        const newComment = await commentsDAL.addComment({
            subject,
            content,
            user: {
                displayName: user
            }
        });
        res.json(newComment);
    }catch(error){
        res.status(500).send(error.message);
    }
})

router.post('/reply',async (req,res,next) => {
    const {commentId,user,content} = req.body;
    const replayData = {
        user: {
            displayName: user
        },
        content
    }
    try{
        const comment = 
            await commentsDAL.addReplayToComment(commentId,replayData);
        res.json(comment);
    }catch(error){
        res.status(500).send(error.message);
    }
})

module.exports = router;