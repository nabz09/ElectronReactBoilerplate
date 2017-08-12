import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../view/Home';

window.onload = function(){
    ReactDOM.render(<Home />, document.getElementById('app'));
}
