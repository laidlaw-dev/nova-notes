import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { AuthProvider } from 'react-oidc-context';
import { CognitoParameters } from './setup/cognito-parameters.ts';
import { AuthenticationCodeCleaner } from './components/utilities/AuthenticationCodeCleaner.tsx';

const cognitoAuthConfig = {
  authority: CognitoParameters.authority,
  client_id: CognitoParameters.client_id,
  redirect_uri: CognitoParameters.redirect_uri,
  response_type: CognitoParameters.response_type,
  scope: CognitoParameters.scope,
};

console.log('Cognito Auth Config:', CognitoParameters);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <AuthenticationCodeCleaner />
      <App />
    </AuthProvider>
  </StrictMode>
);
