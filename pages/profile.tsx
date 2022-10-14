import { getAuth, signOut } from 'firebase/auth';
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

const Profile = () => {
  const user = useAuthUser();
  console.log(user);
  return (
    <div>
      <h1>Test</h1>
      <p>Your email is {user.email ? user.email : 'unknown'}.</p>
      <button onClick={() => signOut(getAuth())}>Logout</button>
    </div>
  );
};

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Profile);
