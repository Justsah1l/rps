import './App.css';
import Game from './components/game';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import About from './components/about';




function App() {
  
  

  return (
   
    
    <div className="App">
    
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/rps" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        
        
        
      </Routes>
    </Router>
    
  </div>
    
  );
}

export default App;
