import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.js';
import { authUser } from '../services/auth.js';

export function useUser() {
  const { user, setUser, loading, setLoading, error, setError } =
    useContext(UserContext);

  const logInUser = async (email, password, type) => {
    const user = await authUser(email, password, type);
    setUser(user);
    setLoading(false);
  };

  return {
    user,
    setUser,
    error,
    setError,
    logInUser,
    loading,
    setLoading,
  };
}
