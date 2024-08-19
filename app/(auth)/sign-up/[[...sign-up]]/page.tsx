import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
    return (
        <main className='grid place-items-center h-screen'>
            <SignUp/>
        </main>
    )
}

export default SignUpPage