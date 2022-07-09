import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
    SignInButtonsContainer,
    SignInContainer,
    SignInHeader
} from './sign-in-form.styles';
import { useDispatch } from "react-redux";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/wrong-password") {
                alert("password is wrong!")
                return;
            }
            if (err.code === "auth/user-not-found") {
                alert("email doesn't exist!")
                return;
            }
            console.log(err);
        }
    }
    const handleFormFieldsChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    return (
        <SignInContainer>
            <SignInHeader>Already have an account?</SignInHeader>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleFormFieldsChange}
                    name='email'
                    value={email} />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleFormFieldsChange}
                    name='password'
                    value={password} />
                <SignInButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPES_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle} >
                        Google sign in
                    </Button>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;