// Class for the Cognitio paramters so they cannot be changed at runtime
export class CognitoParameters {
  static readonly authority = import.meta.env.VITE_COGNITO_AUTHORITY;
  static readonly domain = import.meta.env.VITE_COGNITO_DOMAIN;
  static readonly client_id = import.meta.env.VITE_COGNITO_CLIENT_ID;
  static readonly redirect_uri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
  static readonly post_logout_redirect_uri = import.meta.env
    .VITE_COGNITO_POST_LOGOUT_REDIRECT_URI;
  static readonly response_type = import.meta.env.VITE_COGNITO_RESPONSE_TYPE;
  static readonly scope = import.meta.env.VITE_COGNITO_SCOPE;
}
