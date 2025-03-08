import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import { Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Navbar from './components/Common/Navbar.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'

function App() {
  // const dispatch = useDispatch()
  return (
    <div className="min-h-fit w-screen flex flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
          path='login'
          element={<Login/>}
        />
        <Route
          path='signup'
          element={<Signup/>}
        />
      </Routes>
    </div>
  );
}

export default App;
