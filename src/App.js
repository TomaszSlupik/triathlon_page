import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trips from './components/Trips/Trips';


function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/trips' element={<Trips />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
