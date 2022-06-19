import { Input, FormInputLabel, InputGroup } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <InputGroup>
            <Input
                className='form-input'
                {...otherProps} />
            {
                label && (
                    <FormInputLabel
                        shrink={otherProps.value.length}
                    >
                        {label}
                    </FormInputLabel>
                )
            }
        </InputGroup>
    );
};

export default FormInput;