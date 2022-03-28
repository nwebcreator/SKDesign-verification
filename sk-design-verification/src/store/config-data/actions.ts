import { createAction } from '@reduxjs/toolkit';
import City from './types/city';

export const loadCities = createAction(
    "LOAD_CITIES",
    (cities: City[]) => ({
        payload: cities,
    }),
);

export const loadSources = createAction(
    "LOAD_SOURCES",
    (sources: string[]) => ({
        payload: sources,
    }),
);