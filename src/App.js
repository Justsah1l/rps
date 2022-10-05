import './App.css';
import Game from './components/game';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import About from './components/about';

function click (){
  console.log("works");
}


function App() {
  
  

  return (
   
    
    <div className="App">
    <Router>
      <Routes>
        <Route Exact path="/" basename={process.env.PUBLIC_URL} element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        
        
        
      </Routes>
    </Router>
  </div>
    
  );
}

export default App;
