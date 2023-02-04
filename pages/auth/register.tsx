import React, { useState, useEffect } from 'react';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { SignUpForm } from '@/components/molecules/signUpForm';

const AuthPage = () => {
    const [renderAuth, setRenderAuth] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true);
        }
    }, []);

    return (
        <>
            <div className="p-10  m-auto">
                <h1>Bienvenido al Movimiento Compostero</h1>
                {renderAuth ? <SignUpForm /> : null}
            </div>
        </>
    );
};

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})(AuthPage);
