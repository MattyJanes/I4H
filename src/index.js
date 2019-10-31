import './my-styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Model } from './model.js';
import { App } from './app.js';

ReactDOM.render(<App model={Model} />, document.getElementById('root'));
