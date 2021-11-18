import React from 'react';
import { render } from 'react-dom';
import GlobalStyles from "./globalStyle"
import "normalize.css"
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { auth } from "./lib/firebase"
import { FirebaseContext } from "./context/firebaseContext"

render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{auth}}>
      <GlobalStyles/>
      <App/>
    </FirebaseContext.Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)