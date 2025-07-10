import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile'
import Landing  from './Pages/Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/landing' element={<Landing/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
