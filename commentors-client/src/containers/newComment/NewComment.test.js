import React from 'react';
import ReactDOM from 'react-dom';
import Newcomment from './NewComment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewComment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
