import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority:
    'https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_crFJnnVJC',
  client_id: '1ifvfin3kr0hifc354juokfvjt',
  redirect_uri: 'http://localhost:5173',
  response_type: 'code',
  scope: 'phone openid email',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
