
import CreateNew from './Components/CreateNew';
import MyFlashcard from './Components/MyFlashcard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import "./Style.css"


function App() {
  return (
  
  
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<CreateNew />} />
          <Route exact  path="/myflashcard" element={<MyFlashcard />} />
        </Routes>
      </div>
    </Router>
    
    
    
  );
}

export default App;
