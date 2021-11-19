import React from 'react';
import { render } from 'react-dom';
import GlobalStyles from "./globalStyle"
import "normalize.css"
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { auth, firestoreDB} from "./components/lib/firebase"
import { FirebaseContext } from "./components/context/firebaseContext"
import { Provider } from "react-redux"
import configureStore from './redux/store';

const store = configureStore()

render(
  <BrowserRouter>
    <Provider store={store}>
      <FirebaseContext.Provider value={{auth,firestoreDB}}>
        <GlobalStyles/>
        <App/>
      </FirebaseContext.Provider>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)