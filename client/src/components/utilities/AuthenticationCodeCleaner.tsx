import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

/**
 * A React functional component that cleans up authentication-related query parameters
 * (`code` and `state`) from the URL after they have been processed.
 *
 * This component uses the `useAuth` hook to check the authentication state and ensures
 * that the cleanup only occurs when the authentication process is not loading.
 *
 * The cleanup is performed by replacing the current URL in the browser's history
 * with the same path but without the query parameters.
 *
 * @component
 * @returns {null} This component does not render any visible output.
 *
 * @example
 * // Usage in a React application
 * <AuthenticationCodeCleaner />
 */
export const AuthenticationCodeCleaner = () => {
  const auth = useAuth();

  useEffect(() => {
    if (window.location.search.includes('code=') && !auth.isLoading) {
      // remove ?code=...&state=... from the URL after processing
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [auth.isLoading]);

  return null;
};
