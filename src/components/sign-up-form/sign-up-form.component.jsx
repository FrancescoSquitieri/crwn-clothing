import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const createUser = await createUserDocumentFromAuth(user, { displayName });
            if (createUser) {
                resetFormFields();
                return;
            }
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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
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
        </div>
    );
};

export default SignUpForm;