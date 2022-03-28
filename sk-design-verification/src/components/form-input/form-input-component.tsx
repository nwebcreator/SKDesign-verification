import { ChangeEvent, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset<{ invalid: boolean }>`
    position: relative;
    height: 38px;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(p) => p.invalid ? "#EB5E55" : "#E3E3E3"};

    ${(p) => p.invalid ? `
    &:after {
        position: absolute;
        content: 'Обязательное поле';
        margin-top: 18px;
        font-size: 12px;
        color: #EB5E55;
    }
    ` : `
    &:focus-within {
         border-color: #0086A8;
    }
    &:focus-within > legend {
        color: #0086A8;
    }`}
`;

const FormInput = styled.input`
    width: 100%;
    margin-top: 3px;
    border: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #0086A8;
    }

    &::placeholder {
        color: #CDCAD0;
    }
`;

const InputLegend = styled.legend<{ invalid: boolean }>`
    color:${(p) => p.invalid ? "#EB5E55" : "#828282"};
    font-family: 'SF UI Display normal';
    font-size: 12px;
`;

type FomrInputComponentProps = {
    legend: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
};

const FormInputComponent = forwardRef<{ validate: () => boolean }, FomrInputComponentProps>(({ legend, placeholder, required, value, onChange }: FomrInputComponentProps, ref) => {
    const formInputRef = useRef<HTMLInputElement>(null);
    const [invalid, setInvalid] = useState(false);

    const validate = () => {
        if (required && (!formInputRef.current || formInputRef.current.value.length < 1)) {
            return false;
        } else {
            return true;
        }
    }

    useImperativeHandle(ref, () => ({
        validate() {
            return validate();
        }
    }));

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const newValue = evt.target.value;
        if (validate()) {
            setInvalid(false);
        } else {
            setInvalid(true);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <Fieldset invalid={invalid}>
            <FormInput ref={formInputRef} placeholder={placeholder} required={required} defaultValue={value} onChange={handleInputChange} />
            <InputLegend invalid={invalid}>{legend}{required && " *"}</InputLegend>
        </Fieldset>
    );
});

export default FormInputComponent;