import React from "react"
import { Browse, Home, Login, Signup } from "./components/pages";
import * as ROUTES from "./components/constants/routes"
import { Routes, Route } from "react-router-dom"
import { GuestRoute, UserRoute } from "./components/helpers/routes"

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <GuestRoute>
            <Home/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <GuestRoute>
            <Signup/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.LOGIN}
        element={
          <GuestRoute>
            <Login/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.BROWSE}
        element={
          <UserRoute>
            <Browse/>
          </UserRoute>        
        }
      />
    </Routes>
  )
}

export default App;