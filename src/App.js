import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trips from './components/Trips/Trips';
// eslint-disable-next-line
import "swiper/css/bundle";
import Results from './components/Results/Results';
import Thankyou from './pages/Thankyou';



function App() {
  return (
    <div className="App">
      <Router>
          <Nav />   
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/results' element={<Results />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/thankyou' element={<Thankyou />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
