import React from "react"
import { Browse, Home, Login, Signup } from "./pages";
import * as ROUTES from "./constants/routes"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Home/>}
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={<Signup/>}
      />
      <Route
        path={ROUTES.LOGIN}
        element={<Login/>}
      />
      <Route
        path={ROUTES.BROWSE}
        element={<Browse/>}
      />
    </Routes>
  )
}

export default App;