import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('render client w/out crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
