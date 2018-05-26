const socketIO = require('socket.io');
const commentsDAL = require('../DAL/commentsDAL');

const initializeEvents = (server) => {
    // This creates our socket using the instance of the server
    const io = socketIO(server)

    // This is what the socket.io syntax is like, we will work this later
    io.on('connection', socket => {
        
        socket.on('newComment', async (comment) => {
            const {subject,content,user} = comment;
            const newComment = await commentsDAL.addComment({
                subject,
                content, 
                user: {
                displayName: user
            }});
            const updatedComments = await commentsDAL.getCommentsBySubject(comment.subject);
            io.emit(`data${comment.subject}`,updatedComments);
        })

        // events
        socket.on('disconnect', () => {
        console.log('user disconnected')
        })


    })
}

module.exports = initializeEvents;