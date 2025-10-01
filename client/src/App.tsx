import { BrowserRouter, Route, Routes } from 'react-router';
import { ProtectedLayout } from './pages/ProtectedLayout';
import { HomePage } from './pages/HomePage';
import SignedOut from './pages/SignOutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/signout" element={<SignedOut />} />
      </Routes>
    </BrowserRouter>
  );
};

/*

import { useAuth } from 'react-oidc-context';

const App = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = '1ifvfin3kr0hifc354juokfvjt';
    const logoutUri = 'http://localhost:5173';
    const cognitoDomain =
      'https://eu-north-1crfjnnvjc.auth.eu-north-1.amazoncognito.com';
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
};
*/
export default App;
