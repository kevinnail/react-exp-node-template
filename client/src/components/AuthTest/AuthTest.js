import React from 'react';
import { useUser } from '../../hooks/useUser.js';
import { toast } from 'react-toastify';
import './AuthTest.css';

export default function AuthTest() {
  const { user, logOutUser } = useUser();

  const handleSignOut = async () => {
    try {
      await logOutUser();
      toast.success('Successfully signed out!');
    } catch (error) {
      toast.error('Sign out failed.');
    }
  };

  return (
    <div className="auth-test-container">
      <h2>Success! You are authenticated.</h2>
      <p>Welcome, {user.email}!</p>
      <button onClick={handleSignOut} className="sign-out-btn">
        Sign Out
      </button>
    </div>
  );
}
