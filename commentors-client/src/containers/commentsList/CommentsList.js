import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CommentsList.styles';
import {ScaleLoader} from 'react-spinners';
import Comment from '../../components/comment/Comment';
import NewComment from '../newComment/NewComment';
import {ListGroup} from 'react-bootstrap';

import {getCommentsUpdate,loadInitialComments} from '../../actions/comments/actions';

class CommentsList extends Component {

    componentDidMount(){
        this.props.loadInitialComments(this.props.subject);
        this.props.getCommentsUpdate(this.props.subject);
    }

    componentDidUpdate(){
        this.scrollComments();
    }

    scrollComments = () => {
        const commentsList = document.getElementById("comments-list");
        if(commentsList){
            commentsList.scrollTop = commentsList.scrollHeight;
        }
    }

    getRenderedList = () => {
        return this.props.comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />
        })
    }
  
    render() {
        let content = null; 

        if(this.props.comments === null){
            content = (
                <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ScaleLoader
                    color={'#123abc'} 
                    />
                </div>
            )
        }else if(this.props.comments.length === 0){
            content = (
                <div>
                    <div>be the first to comment!</div>
                    <NewComment user={this.props.user} subject={this.props.subject} />
                </div>
            )
        }else{
            content = (
                <div>
                <ListGroup style={
                    {
                        maxHeight: "80vh",
                        overflow: "auto"
                    }
                } id="comments-list">
                {this.getRenderedList()}
                </ListGroup>
                <NewComment user={this.props.user} subject={this.props.subject} />
                </div>

            )
        }


        return (
            content
        );
    }
}

const mapStateToProps = (state) => {
    return{
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps,
                       {getCommentsUpdate,loadInitialComments})
                       (CommentsList);
