import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('innerHTMLに含まれているか確認', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.innerHTML).toContain('first app');
  ReactDOM.unmountComponentAtNode(div)
});
