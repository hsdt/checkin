import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Greet from './components/greet';

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap'];
ReactDOM.render(<Greet techs={techStack} />, document.getElementById('app-container'));
