import React from "react"
import { Browse, Home, Login, Signup } from "./pages";
import * as ROUTES from "./constants/routes"
import { Routes, Route } from "react-router-dom"
import { GuestRoute, UserRoute } from "./helpers/routes"
import { useAuthListener } from "./hooks"

function App() {

  const { user } = useAuthListener()

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <GuestRoute user={user}>
            <Home/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <GuestRoute user={user}>
            <Signup/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.LOGIN}
        element={
          <GuestRoute user={user}>
            <Login/>
          </GuestRoute>
        }
      />
      <Route
        path={ROUTES.BROWSE}
        element={
          <UserRoute user={user}>
            <Browse/>
          </UserRoute>        
        }
      />
    </Routes>
  )
}

export default App;