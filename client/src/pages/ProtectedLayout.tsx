import { CognitoParameters } from '@/setup/cognito-parameters';
import { useAuth } from 'react-oidc-context';
import { Outlet } from 'react-router';

export const ProtectedLayout = () => {
  const auth = useAuth();

  // Uses CognitoParameters from environment variables
  // to construct the logout URL and redirect the user there.
  // After logout, Cognito will redirect back to the specified
  // post_logout_redirect_uri.
  const signOutRedirect = async () => {
    const clientId = CognitoParameters.client_id;
    const redirectUri = CognitoParameters.post_logout_redirect_uri;
    const cognitoDomain = CognitoParameters.domain;

    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(redirectUri)}`;
  };

  if (auth.isLoading) return <p>Loading...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;

  if (!auth.isAuthenticated) {
    auth.signinRedirect(); // trigger login
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      <div>
        <button onClick={async () => signOutRedirect()}>Logout</button>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
