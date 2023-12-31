import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"

const RedirectRoute = ({ page: Page }) => {
  const { user, loaded } = useContext(UserContext)

  if (!loaded) {
    return <p>Loading...</p>
  }

  if (user.isLoggedIn) {
    return <Navigate to="/account" replace />
  }
  return <Page />
}

export default RedirectRoute
