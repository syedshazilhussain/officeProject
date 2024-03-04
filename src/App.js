import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
// import operifyLogo from './img/Oprify final-04.png'
// import preloader from './img/preloader-unscreen.gif'
import { Route, Routes } from 'react-router-dom';
import Services from './Services/Services';
import Footer from './Footer/Footer';
import Portal from './Portal/Portal';
import Login from './Portal/Login';
// import Drawer from './AdminPanal/Drawer';
import PermanentDrawerLeft from './AdminPanal/Drawers';
import Inbox from './AdminPanal/Inbox';
import About from './AdminPanal/About';
import Error from './AdminPanal/Error';
import EditPage from './AdminPanal/EditPage';
// import PersistentDrawerLeft from './AdminPanal/Drawers';

function App() {
  //   window.addEventListener('load', () => {
  //     const preloader = document.querySelector('.preloader');
  //     preloader.classList.add('preload-finish')
  //   })
  //   window.addEventListener('load', () => {
  //     const preloader = document.querySelector('.text__div');
  //     preloader.classList.add('text-finish')
  //   })
  return (
    <>
      <div className="preloader" id="preloading">
        {/*<img src={preloader} alt="" />
        <img src={operifyLogo} alt="" />
        <div className="animate__div">
          <div className="animate__div1"></div>
          <div className="animate__div2"></div>
        </div>
      </div>
      <div className='text__div'>
        <h1>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>

          <span>T</span>
          <span>O</span>

          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
          <span>I</span>
          <span>F</span>
          <span>Y</span>
        </h1> */}
      </div>
      {/* <div className="main__section" id="main__sections"> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/portal/*' element={<Portal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Drawers' element={<PermanentDrawerLeft />} />
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/editpage' element={<EditPage/>}/> */}
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer />

      {/* </div> */}
    </>
  );
}

export default App;
