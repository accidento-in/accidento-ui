import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';

const Login = () => {
    const responseHandler = (response) => {
        console.log(response); // Handle the response here
    }

    const errorHandler = (error) => {
        console.log(error); // Handle the error here
    }
    const clientId = "474677166690-rh87rmm02rhan5vs9iofhdssj3bsgag6.apps.googleusercontent.com"

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GoogleSignIn clinetId={clientId} responseHandler={responseHandler} errorHandler={errorHandler} />
        </div>
    );
}

export default Login;