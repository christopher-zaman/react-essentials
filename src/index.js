import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const [mostImportantItem, second] = ["first", "second", "third"];
console.log(mostImportantItem, second);

ReactDOM.render(<App authorized={true} />, 
  document.getElementById('root')
);


