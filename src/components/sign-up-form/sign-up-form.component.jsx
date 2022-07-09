import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpHeader } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password and confirm password must be the same");
            return;
        } else if (password === confirmPassword && password.length < 6) {
            alert("the length of password should be min 6 charactes");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields()
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("warning! the email is already registred");
                return;
            } else {
                console.log(err);
            }
        }
    }
    const handleFormFieldsChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleFormFieldsChange}
                    name='displayName'
                    value={displayName} />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleFormFieldsChange}
                    name='confirmPassword'
                    value={confirmPassword} />
                <Button type='submit' >Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;