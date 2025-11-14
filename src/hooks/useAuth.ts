import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tokenSelectors } from 'src/app/store/slices/token';

export const useAuth = () => {
  const token = useSelector(tokenSelectors.get);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const state = new URLSearchParams(location.search).get('next');
      navigate(state || '/');
    }
  }, [token, navigate]);

  return { isAuthenticated: !!token, token };
};
