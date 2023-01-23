import React, { useState, useEffect } from 'react';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { SignInForm } from '@/components/molecules/signInForm';
import { SignUpForm } from '@/components/molecules/signUpForm';

const SignUp = () => {
    const [renderAuth, setRenderAuth] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true);
        }
    }, []);

    return (
        <>
            <div>
                <h1>Login</h1>

                {renderAuth ? <SignUpForm /> : null}
            </div>
            <div className="bg-yellowQ w-full h-full">
                Qosqomposta
                <button className="btn btn-primary">Test</button>
            </div>
        </>
    );
};

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignUp);
