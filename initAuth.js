import { init } from 'next-firebase-auth';

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: err => {
      console.error(err);
    },
    onLogoutRequestError: err => {
      console.error(err);
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'qosqomposta-11dcd',
        clientEmail: process.env.CLIENT_EMAIL,
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://my-example-app.firebaseio.com',
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyBwEociMm3bV1hh0Ssberd5kfMoMZWJgTA',
      authDomain: 'qosqomposta-11dcd.firebaseapp.com',
      projectId: 'qosqomposta-11dcd',
      databaseURL: 'https://my-example-app.firebaseio.com',
    },
    cookies: {
      name: 'Qosqomposta', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: err => {
      console.error(err);
    },
    onTokenRefreshError: err => {
      console.error(err);
    },
  });
};

export default initAuth;