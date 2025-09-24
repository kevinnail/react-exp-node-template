import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ApiTest from './components/ApiTest/ApiTest';
import Auth from './components/Auth/Auth';
import AuthTest from './components/AuthTest/AuthTest';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js';
import { UserProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';

window.isLocal =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <ToastContainer position="top-center" />

        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'black',
          }}
        >
          <Routes>
            <Route path="/auth/:type" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/api-test" element={<ApiTest />} />
            <Route
              path="/auth-test"
              element={
                <ProtectedRoute>
                  <AuthTest />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}
