import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ApiTest from './components/ApiTest/ApiTest';
import Auth from './components/Auth/Auth';
import AuthTest from './components/AuthTest/AuthTest';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext.js';
import { useUser } from './hooks/useUser.js';

function ProtectedRoute({ children }) {
  const { user } = useUser();
  return user && user.id !== 'demo-user' ? children : <Navigate to="/auth" />;
}

function App() {
  return (
    <UserProvider>

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
              <Link to="/auth-test" className="nav-link">Auth Test</Link>
            </div>
          </div>
        </nav>
        
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api-test" element={<ApiTest />} />
            <Route path="/auth/:type" element={<Auth />} />
            <Route path="/auth-test" element={<ProtectedRoute><AuthTest /></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;