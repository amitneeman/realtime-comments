import React, { Component } from 'react';
import styles from './App.styles.js';

import CommentsList from '../../containers/commentsList/CommentsList.js';

class App extends Component {
  render() {
    return (
      <div>
        <CommentsList user={this.props.user} subject={this.props.subject} />
      </div>
    );
  }
}

export default App;

