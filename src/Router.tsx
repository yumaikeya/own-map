import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LeftDrawer from 'Layouts/LeftDrawer'
import TopPage from 'Pages/Top'
import LoginPage from 'Pages/Login'

type Props = {
  children: React.ReactNode
}

const ProtectRoute: React.FC<Props> = ({ children }) => {
  const { error, isLoading, isAuthenticated } = useAuth0()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Oops... {error.message}</div>

  return isAuthenticated
    ? (
      <LeftDrawer>
        <Routes>
          {children}
        </Routes>
      </LeftDrawer>
    ) : <Navigate to='/login' />
}

const TopRouting = () => (
  <ProtectRoute>
    <Route index element={<TopPage />} />
  </ProtectRoute>
)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<TopRouting />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router