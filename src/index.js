import React from 'react';
import ReactDOM from 'react-dom';
import Seccion1 from './Containers/Seccion1'
import Seccion2 from './Containers/Seccion2'

ReactDOM.render(
  <React.StrictMode>
    <Seccion1 />
    <Seccion2 />
  </React.StrictMode>,
  document.getElementById('root')
);

