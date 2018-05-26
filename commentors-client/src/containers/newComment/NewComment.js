import React, { Component } from 'react';
import styles from './NewComment.styles';
import {connect} from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import {addComment} from '../../actions/comments/actions';


class NewComment extends Component {

    addComment(values){
        this.props.addComment({
            "user": this.props.user,
            "content": values.content,
            "subject": this.props.subject
        });

        values.content = '';
    }

    renderField(field){

        const { meta: {touched, error}} = field;
        return (
            <div className='form-field'>
                <input
                 className="form-control"
                 placeholder="הוסף תגובה חדשה..."
                 type="text"
                 {...field.input}
                />
            </div>
        );
    }
  
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.addComment.bind(this))}>
                <Field
                 label="content"
                 name="content"
                 component={this.renderField}
                />
                
            </form>
        );
    }
}

const validate = (values)=> {
    const errors = {};

    if(!values.content){
        errors.content = 'enter a content'
    };

    return errors;
}

const mapStateToProps = (state) => {
    return{

    }
}

export default reduxForm({
    form: 'NewCommentForm',
    validate
})(
    connect(mapStateToProps,{ addComment })(NewComment)
);

