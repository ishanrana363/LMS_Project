import React from 'react'
import Header from './component/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Layout from './component/layout/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Layout/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
