import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCities, getSources } from '../../store/config-data/selectors';
import { resetFormStore, setCity, setCompanyName, setEmail, setName, setPhone, setProfileLink, setRecipientName, setSource } from '../../store/form-data/actions';
import { getCity, getCompanyName, getEmail, getName, getPhone, getProfileLink, getRecipientName, getSource } from '../../store/form-data/selectors';
import AdditionalBlockComponent from '../additional-block/additional-block-component';
import DropdownComponent from '../dropdown/dropdown-component';
import FormInputComponent from '../form-input/form-input-component';

const Form = styled.form`
    width: 380px;
    padding: 40px 30px;
    border-radius: 8px;
    box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
    transition: 0.7s;
    @media (max-width: 768px) {
        height: 100%;
        margin-top: 20px;
        row-gap: 20px;
      }
`;

const MainBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    & >* {
        flex: 1 1 139px;
    }

    & >*:nth-last-child(-n + 2) {
        flex-basis: 100%;
`;

const FormSubmitButton = styled.button`
    height: 50px;
    background: #0086A8;
    border: 0;
    border-radius: 8px;
    width: 380px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
    padding: 0 2px;
    bottom: 20px;
    margin-top: 20px;

    &:disabled {
        background: #E3E3E3;
        color: #828282;
    }

    &:hover:enabled {
        background: #007693;
    }

    &:hover:active {
        background: #00657E;
    }

    @media (max-width: 768px) {
        width: 380px;
        }
`;

const FormComponent = () => {
    const dispatch = useDispatch();
    const [formKey, setFormKey] = useState(Math.random());
    const [formInvalid, setFormInvalid] = useState(false);

    const nameRef = useRef({ validate: () => true });
    const phoneRef = useRef({ validate: () => true });
    const emailRef = useRef({ validate: () => true });
    const profileLinkRef = useRef({ validate: () => true });
    const cityRef = useRef({ validate: () => true });
    const companyNameRef = useRef({ validate: () => true });
    const recipientNameRef = useRef({ validate: () => true });
    const sourceRef = useRef({ validate: () => true });
    const cities = useSelector(getCities);
    const sources = useSelector(getSources);

    const name = useSelector(getName);
    const phone = useSelector(getPhone);
    const email = useSelector(getEmail);
    const profileLink = useSelector(getProfileLink);
    const city = useSelector(getCity);
    const companyName = useSelector(getCompanyName);
    const recipientName = useSelector(getRecipientName);
    const source = useSelector(getSource);

    const validateForm = () => {
        // какой то из элементов не прошел валидацию
        const validates = [
            nameRef.current.validate,
            phoneRef.current.validate,
            emailRef.current.validate,
            profileLinkRef.current.validate,
            cityRef.current.validate,
            companyNameRef.current.validate,
            recipientNameRef.current.validate,
            sourceRef.current.validate,
        ].map((validate) => !validate || validate());

        const validForm = !validates.includes(false);
        setFormInvalid(!validForm);
        return validForm;
    };

    useEffect(() => {
        validateForm();
    }, []);

    const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        return setTimeout(() => {
            console.log({
                name,
                phone,
                email,
                profileLink,
                city,
                companyName,
                recipientName,
                source
            });
            dispatch(resetFormStore());
            setFormKey(Math.random());
            validateForm();
        }, 10);
    }

    return (
        <Form key={formKey} onSubmit={handleFormSubmit} noValidate>
            <MainBlock>
                <FormInputComponent ref={nameRef} legend="Ваше имя" placeholder="Иван" required value={name} onChange={(value: string) => {
                    validateForm();
                    dispatch(setName(value));
                }} />
                <FormInputComponent ref={phoneRef} legend="Номер телефона" placeholder="+7 (000) 000-00-00" required value={phone} onChange={(value: string) => {
                    validateForm();
                    dispatch(setPhone(value));
                }} />
                <FormInputComponent ref={emailRef} legend="E-mail" placeholder="example@skdesign.ru" required value={email} onChange={(value: string) => {
                    validateForm();
                    dispatch(setEmail(value));
                }} />
                <FormInputComponent ref={profileLinkRef} legend="Ссылка на профиль" placeholder="instagram.com/skde…" required value={profileLink} onChange={(value: string) => {
                    validateForm();
                    dispatch(setProfileLink(value));
                }} />
                <DropdownComponent ref={cityRef} title="Выберите город" required items={cities} onChange={(value: string) => {
                    validateForm();
                    dispatch(setCity(value));
                }} />
                <FormInputComponent ref={companyNameRef} legend="Название организации/студии" placeholder="SK Design" value={companyName} onChange={(value?: string) => {
                    validateForm();
                    dispatch(setCompanyName(value));
                }} />
            </MainBlock>

            <AdditionalBlockComponent>
                <FormInputComponent ref={recipientNameRef} legend="Получатель" placeholder="ФИО" value={recipientName} onChange={(value?: string) => {
                    validateForm();
                    dispatch(setRecipientName(value));
                }} />
                <DropdownComponent ref={sourceRef} title="Откуда узнали про нас?" items={sources.map((source) => {
                    return {
                        id: source,
                        name: source
                    };
                })} onChange={(value: string) => {
                    validateForm();
                    dispatch(setSource(value));
                }} />
            </AdditionalBlockComponent>
            <FormSubmitButton type="submit" disabled={formInvalid}>Отправить заявку</FormSubmitButton>
        </Form>
    );
};

export default FormComponent;