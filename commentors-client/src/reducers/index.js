import { combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import { commentsReducer } from './commentsReducer';

const rootReducer = combineReducers({
    comments: commentsReducer,
    form: formReducer
});

export default rootReducer;
