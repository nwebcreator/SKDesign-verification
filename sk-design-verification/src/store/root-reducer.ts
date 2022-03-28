import { combineReducers } from 'redux';
import { configData } from './config-data/config-data';
import { formData } from './form-data/form-data';

export enum NameSpace {
  ConfigData = 'CONFIG_DATA',
  FormData = 'FORM_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.ConfigData]: configData,
  [NameSpace.FormData]: formData,
});

export type RootState = ReturnType<typeof rootReducer>;
