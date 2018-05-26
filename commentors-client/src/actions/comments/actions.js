import io  from 'socket.io-client'
import axios from 'axios';

const serverHost = 'http://localhost:9496/';
const BaseUrl = `${serverHost}comments`;
const replyUrl = `${BaseUrl}/reply`;

const socket = io.connect(serverHost,{});

export const actionTypes = {
    COMMENTS_UPDATE: 'COMMENTS_UPDATE',
    ADD_COMMENT: 'ADD_COMMENT'
}

export const loadInitialComments = (subject) => {
    const request = axios.get(`${BaseUrl}/${subject}`);

    return dispatch => {
        request.then((response) => {
            dispatch({
                type: actionTypes.COMMENTS_UPDATE,
                comments: response.data
            })
        })
    }
}

export const getCommentsUpdate = (subject) => {
    return dispatch => {
        socket.on(`data${subject}`, (data) => {
            console.log('comments updated!');
            dispatch({
                type: actionTypes.COMMENTS_UPDATE,
                comments: data
            })
        });
    }
}

export const addComment = (comment) => {
    return dispatch => {
        socket.emit('newComment',comment);
    }
}