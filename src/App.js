import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/loginform";
import RegisterForm from "./components/registerForm";
import HomeForm from "./components/Home";
import BasicForm from "./components/Form"
import { Route,Routes, Link, BrowserRouter as Router } from 'react-router-dom' ;







function App() {
  return (
    <div className="page  ">
        <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>}  />
        <Route path ="/home" element={<HomeForm/>} />
        {/* <Route path="/form" element={<BasicForm/>}  /> */}
       </Routes>
    </div>
  );
}

export default App;
