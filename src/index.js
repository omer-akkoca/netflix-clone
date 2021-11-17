import React from 'react';
import { render } from 'react-dom';
import GlobalStyles from "./globalStyle"
import "normalize.css"
import App from './App';
import { BrowserRouter } from "react-router-dom"

render(
  <BrowserRouter>
    <GlobalStyles/>
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root')
)