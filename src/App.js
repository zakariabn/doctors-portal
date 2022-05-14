import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
import About from './components/pages/About/About';
import Appointment from './components/pages/Appointment/Appointment';
import Home from './components/pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Header/Navigation';
import PageNotFound from './components/Shared/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>

       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>  
    </div>
  );
}

export default App;
