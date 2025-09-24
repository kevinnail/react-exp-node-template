import process from 'process';
import { createContext, useEffect, useState } from 'react';
// import { authUser } from '../services/auth.js';
import { getUser } from '../services/fetch-auth.js';

const UserContext = createContext();

// Read environment variable at module level
const googleId = process.env.REACT_APP_GOOGLE_USER_ID;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        // Only set user if we get valid user data from the server
        if (user && user.id && user.email) {
          setUser(user);
          setUserId(googleId);
        } else {
          setUser(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error in fetchUser:', error);
        setError(error);
        setUser(null);
        setLoading(false);
        // If it's an auth error, clear any stale cookies
        if (error.status === 401) {
          // Could call signOut here to clear cookies
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
