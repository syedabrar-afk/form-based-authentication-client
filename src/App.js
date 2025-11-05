import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
