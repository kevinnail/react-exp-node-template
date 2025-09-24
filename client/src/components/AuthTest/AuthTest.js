import React from 'react';
import { useUser } from '../../hooks/useUser.js';
import { signOutUser } from '../../services/fetch-auth.js';
import { toast } from 'react-toastify';
import './AuthTest.css';

export default function AuthTest() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
      toast.success('Successfully signed out!');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error(`Sign out failed: ${error.message}`);
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
