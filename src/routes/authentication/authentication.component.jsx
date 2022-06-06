import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';
//import { useEffect } from "react";
//import { getRedirectResult } from "@firebase/auth";

const Authentication = () => {

    // useEffect(() => {
    //     const getRedirect = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     };
    //     getRedirect();
    //     console.log('use effect fired')
    // }, []);

    return (
        <div className='authentication-container'>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;