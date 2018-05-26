import React from 'react';
import styles from './Comment.styles';
import {ListGroupItem} from 'react-bootstrap';


const Comment = ({comment}) => (
    <ListGroupItem header={comment.user.displayName}>
      {comment.content}
    </ListGroupItem>
)
export default Comment;


