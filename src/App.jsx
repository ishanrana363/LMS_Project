import React from 'react'
import Header from './component/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../src/assets/css/app.css"
import Layout from './component/layout/Layout'
import Registration from './component/Registration'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import EmailLoginPage from './pages/EmailLoginPage'
import PhoneLoginPage from "./pages/PhoneLoginPage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Layout/> } />
          <Route path='/registration' element = { <RegistrationPage/> } />
          <Route path='/login' element = {<LoginPage/>} />
          <Route path='/email' element = { <EmailLoginPage/> } />
          <Route path="/phone" element = { <PhoneLoginPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
