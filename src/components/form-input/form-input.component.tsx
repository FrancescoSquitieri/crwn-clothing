import { Input, FormInputLabel, InputGroup } from "./form-input.styles";
import {FC, InputHTMLAttributes} from "react";

export type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <InputGroup>
            <Input
                className='form-input'
                {...otherProps} />
            {
                label && (
                    <FormInputLabel
                        shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}
                    >
                        {label}
                    </FormInputLabel>
                )
            }
        </InputGroup>
    );
};

export default FormInput;