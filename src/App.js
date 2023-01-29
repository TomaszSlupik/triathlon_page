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
import Championman2022 from './components/Trips/Describetrips/Championman2022/Championman2022';
import Maraton2022 from './components/Trips/Describetrips/Maraton2022/Maraton2022';
import Poznan2022 from './components/Trips/Describetrips/Poznan2022/Poznan2022';
import Babicka2022 from './components/Trips/Describetrips/Babicka2022/Babicka2022';
import Gdynia2022 from './components/Trips/Describetrips/Gdynia2022/Gdynia2022';
import Bydgoszcz2022 from './components/Trips/Describetrips/Bydgoszcz2022/Bydgoszcz2022';
import Olsztyn2022 from './components/Trips/Describetrips/Olsztyn2022/Olsztyn2022';


function App() {
  return (
    <div className="App">
      <Router>
          <Nav />   
        <Routes>
          <Route path='/triathlon_page' element={<Main />} />
          <Route path='/triathlon_page/results' element={<Results />} />
          <Route path='/triathlon_page/trips' element={<Trips />} />
          <Route path='/triathlon_page/thankyou' element={<Thankyou />} />
          <Route path='/triathlon_page/maraton2022' element={<Maraton2022 />} />
          <Route path='/triathlon_page/championman2022' element={<Championman2022 />} />
          <Route path='/triathlon_page/poznan2022' element={<Poznan2022 />} />
          <Route path='/triathlon_page/babicka2022' element={<Babicka2022 />} />
          <Route path='/triathlon_page/gdynia2022' element={<Gdynia2022 />} />
          <Route path='/triathlon_page/bydgoszcz2022' element={<Bydgoszcz2022 />} />
          <Route path='/triathlon_page/olsztyn2022' element={<Olsztyn2022 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
