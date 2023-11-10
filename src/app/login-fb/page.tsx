"use client";
import {signIn, signOut, useSession} from "next-auth/react";


const loginFb = () => {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() =>  signIn(
                'facebook',
                // { callbackUrl: 'http://localhost:3000' }
            )}>Sign in</button>
        </>
    )
}

export default loginFb