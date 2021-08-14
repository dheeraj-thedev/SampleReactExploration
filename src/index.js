import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import ProfileData from "./pages/profiledata"

// function Example() {
//   return (
//     <div>Hello</div>
//   );
// }

// ReactDOM.render(
//   J0 maine banaya-> componenet we created,
//   where to place argument no 1
// );



ReactDOM.render(
  <StrictMode>
  <ProfileData></ProfileData>
  </StrictMode>,
  document.getElementById('root')

)
