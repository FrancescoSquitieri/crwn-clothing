import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
//import { useEffect } from "react";
//import { getRedirectResult } from "@firebase/auth";

const SignIn = () => {

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

    const logGoogleUserPopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUserPopup}>
                Sign In With Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */}
            <SignUpForm />
        </div>
    );
};

export default SignIn;