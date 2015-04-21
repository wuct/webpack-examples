import React from 'react';

console.log('I am  a plugin.');

let e = 
  <div>
    <h2>Plugin</h2>
    hi, i am from plugin!
  </div>;

React.render(e, document.getElementById('c'));