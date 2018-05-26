import {actionTypes} from '../actions/comments/actions';

const initialState = {
    comments : null
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_UPDATE:
            return {
                comments: action.comments
            }
        default:
            return state;
    }
}