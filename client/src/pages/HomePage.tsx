import { useAuth } from 'react-oidc-context';

export const HomePage = () => {
  const auth = useAuth();

  // Ensure the user is authenticated before rendering the homepage
  // This is optional if the HomePage is always wrapped in ProtectedLayout
  if (!auth.isAuthenticated) {
    throw new Error('User is not authenticated');
  }

  console.log('Auth state:', auth);
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Nova Notes</h1>
      <p className="text-lg text-gray-600">
        Your secure and private note-taking application.
      </p>
    </div>
  );
};
