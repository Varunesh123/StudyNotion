import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import { Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Navbar from './components/Common/Navbar.jsx'

function App() {
  // const dispatch = useDispatch()
  return (
    <div className="min-h-fit w-screen flex flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
