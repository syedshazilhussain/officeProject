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
import Abouts from './About/About';
import Login from './Portal/Login';
// import Drawer from './AdminPanal/Drawer';
import PermanentDrawerLeft from './AdminPanal/Drawers';
import Inbox from './AdminPanal/Inbox';
import About from './AdminPanal/About';
import Error from './AdminPanal/Error';
// import EditPage from './AdminPanal/EditPage';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Oceanrender from './Home/oceanrender';
import Extra from './Home/extra';
import bodyAttachmentVideo from './video/homepagewwwweb.mp4'
import AnimCursor from './AnimCursor';
// import IMG3 from '../img/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology.jpg'
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
      <div className="main__section" id="main__sections">
        <div className='cursor__dot' data-cursor-dot></div>
        <div className='cursor__outline' data-cursor-outline></div>
        <AnimCursor/>
      {/* <div> */}
        <video autoPlay loop muted playsInline>
          <source src={bodyAttachmentVideo} type='video/mp4' />
        </video>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/portal/*' element={<Portal />} />
            <Route path='aboutUs' element={<Abouts />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contactus' element={<Contacts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Drawers' element={<PermanentDrawerLeft />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/about' element={<About />} />
            <Route path='/three' element={<Extra />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
      {/* </div> */}
      </div>
    </>
  );
}

export default App;
