import { Route, Routes } from 'react-router-dom';
import './App.css';
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
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>

     <Footer></Footer>
      
    </div>
  );
}

export default App;
