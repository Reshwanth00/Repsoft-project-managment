import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.mainContainer}>
      <Router>
        <Routes>

          <Route path="/" element={<div>
            initial
          </div>} />

          <Route path="/food" element={<div>
            food
          </div>} />
          <Route path='/category' element={<div>
            category
          </div>} />
          <Route path="/booking" element={<div>
            booking
          </div>} />
          <Route path="/type" element={<div>
            type
          </div>} />
          
        </ Routes>

      </Router>
    </div>
  );
}

export default App;