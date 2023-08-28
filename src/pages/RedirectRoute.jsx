import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const RedirectRoute = ({ children }) => {
  const { user } = useContext(UserContext)
  if (user.isLoggedIn) {
    return <Navigate to="/account" replace />
  }
  return children
}

export default RedirectRoute
