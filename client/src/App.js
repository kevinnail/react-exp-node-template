import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ApiTest from './components/ApiTest/ApiTest';
import Auth from './components/Auth/Auth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
            <ToastContainer position="top-center" />

      <div className="App">
        <nav className="App-nav">
          <div className="nav-container">
            <Link to="/" className="nav-brand">
              Full-Stack Template
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/api-test" className="nav-link">API Test</Link>
              <Link to="/auth" className="nav-link">Auth</Link>
            </div>
          </div>
        </nav>
        
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api-test" element={<ApiTest />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;