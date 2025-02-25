import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-fit w-screen flex flex-col bg-richblack-900 font-inter">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
