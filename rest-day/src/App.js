import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
