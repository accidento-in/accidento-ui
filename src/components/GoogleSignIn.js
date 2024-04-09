import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

function GoogleSignIn({ clinetId, responseHandler, errorHandler }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GoogleOAuthProvider clientId={clinetId}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        responseHandler(credentialResponse);
                    }}
                    onError={(error) => {
                        errorHandler(error);
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
}

export default GoogleSignIn;