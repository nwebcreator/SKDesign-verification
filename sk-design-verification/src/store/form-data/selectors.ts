import { NameSpace, RootState } from "../root-reducer";

export const getName = (state: RootState): string => state[NameSpace.FormData].name;
export const getPhone = (state: RootState): string => state[NameSpace.FormData].phone;
export const getEmail = (state: RootState): string => state[NameSpace.FormData].email;
export const getProfileLink = (state: RootState): string => state[NameSpace.FormData].profileLink;
export const getCity = (state: RootState): string => state[NameSpace.FormData].city;
export const getCompanyName = (state: RootState): string | undefined => state[NameSpace.FormData].companyName;
export const getRecipientName = (state: RootState): string | undefined => state[NameSpace.FormData].recipientName;
export const getSource = (state: RootState): string | undefined => state[NameSpace.FormData].source;