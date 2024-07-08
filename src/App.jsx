import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../src/assets/css/app.css"
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import EmailLoginPage from './pages/EmailLoginPage'
import PhoneLoginPage from "./pages/PhoneLoginPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Homepage/> } />
          <Route path='/registration' element = { <RegistrationPage/> } />
          <Route path='/login' element = {<LoginPage/>} />
          <Route path='/email' element = { <EmailLoginPage/> } />
          <Route path="/phone" element = { <PhoneLoginPage/> } />
          <Route path={"/courses-details"} element={<CourseDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
