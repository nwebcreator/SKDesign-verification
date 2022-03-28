import { createAction } from '@reduxjs/toolkit';

export const resetFormStore = createAction(
    "RESET_FORM_STORE",
    () => ({ payload: undefined })
);

export const setName = createAction(
    "SET_NAME",
    (name: string) => ({
        payload: name,
    }),
);

export const setPhone = createAction(
    "SET_PHONE",
    (phone: string) => ({
        payload: phone,
    }),
);

export const setEmail = createAction(
    "SET_EMAIL",
    (email: string) => ({
        payload: email,
    }),
);

export const setProfileLink = createAction(
    "SET_PROFILELINK",
    (profileLink: string) => ({
        payload: profileLink,
    }),
);

export const setCity = createAction(
    "SET_CITY",
    (city: string) => ({
        payload: city,
    }),
);

export const setCompanyName = createAction(
    "SET_COMPANYNAME",
    (companyName?: string) => ({
        payload: companyName,
    }),
);

export const setRecipientName = createAction(
    "SET_RECIPIENTNAME",
    (recipientName?: string) => ({
        payload: recipientName,
    }),
);

export const setSource = createAction(
    "SET_SOURCE",
    (source?: string) => ({
        payload: source,
    }),
);