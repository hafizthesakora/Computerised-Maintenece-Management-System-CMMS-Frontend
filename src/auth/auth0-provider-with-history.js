// src/auth/auth0-provider-with-history.js

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain =
    process.env.REACT_APP_AUTH0_DOMAIN || 'dev-xk1i3hzahvju73ew.us.auth0.com';
  const clientId =
    process.env.REACT_APP_AUTH0_CLIENT_ID || 'lGnfzjWM8nLHWipwwaOjUjsqbpnXs9eQ';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
