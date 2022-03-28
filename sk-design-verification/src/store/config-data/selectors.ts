import { NameSpace, RootState } from "../root-reducer";
import City from "./types/city";

export const getCities = (state: RootState): City[] => state[NameSpace.ConfigData].cities;
export const getSources = (state: RootState): string[] => state[NameSpace.ConfigData].sources;