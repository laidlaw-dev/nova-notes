import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';

export default function SignedOut() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // clear local state
    auth.removeUser().catch(() => {});
    // redirect to login page ("/")
    navigate('/', { replace: true });
  }, [auth, navigate]);

  return <p>Signing out...</p>;
}
