// import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Akun from './pages/akun/Akun';
import ChangePass from './pages/akun/ChangePass';
import History from './pages/akun/History';
import Course from './pages/course/Course';
import ResetPaswd from './auth/ResetPaswd';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/ChangePass" element={<ChangePass />} />
        <Route path="/History" element={<History />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/resetPassword" element={<ResetPaswd />} />
        <Route path="/course" element={<Course/>} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
