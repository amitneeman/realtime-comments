import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './CommentsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});
