import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/about' exact Component={About}></Route>
          <Route path='/Projects' exact Component={Projects}></Route>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
