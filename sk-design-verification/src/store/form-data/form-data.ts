import { createReducer } from '@reduxjs/toolkit';
import { resetFormStore, setName, setPhone, setEmail, setProfileLink, setCity, setCompanyName, setRecipientName, setSource } from './actions';

type FormData = {
    name: string;
    phone: string;
    email: string;
    profileLink: string;
    city: string;
    companyName?: string;
    recipientName?: string;
    source?: string;
}

const initialState: FormData = {
    name: '',
    phone: '',
    email: '',
    profileLink: '',
    city: '',
    companyName: undefined,
    recipientName: undefined,
    source: undefined
};

const formData = createReducer(initialState, (builder) => {
    builder
        .addCase(resetFormStore, (state, action) => {
            state.name = initialState.name;
            state.phone = initialState.phone;
            state.email = initialState.email;
            state.profileLink = initialState.profileLink;
            state.city = initialState.city;
            state.companyName = initialState.companyName;
            state.recipientName = initialState.recipientName;
            state.source = initialState.source;
        })
        .addCase(setName, (state, action) => {
            state.name = action.payload;
        })
        .addCase(setPhone, (state, action) => {
            state.phone = action.payload;
        })
        .addCase(setEmail, (state, action) => {
            state.email = action.payload;
        })
        .addCase(setProfileLink, (state, action) => {
            state.profileLink = action.payload;
        })
        .addCase(setCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(setCompanyName, (state, action) => {
            state.companyName = action.payload;
        })
        .addCase(setRecipientName, (state, action) => {
            state.recipientName = action.payload;
        })
        .addCase(setSource, (state, action) => {
            state.source = action.payload;
        });
});

export { formData };
