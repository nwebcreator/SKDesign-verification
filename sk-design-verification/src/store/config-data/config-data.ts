import { createReducer } from '@reduxjs/toolkit';
import { loadCities, loadSources } from './actions';
import City from './types/city';

type ConfigData = {
    cities: City[];
    sources: string[];
}

const initialState: ConfigData = {
    cities: [],
    sources: []
};

const configData = createReducer(initialState, (builder) => {
    builder
        .addCase(loadCities, (state, action) => {
            state.cities = action.payload;
        })
        .addCase(loadSources, (state, action) => {
            state.sources = action.payload;
        });
});

export { configData };
