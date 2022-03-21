import { HeroesModel } from "src/app/models/heroes.models";


export interface HeroesState {

    heroeTemp : HeroesModel | null,
    loading  : boolean,
    error    : any,
    heroes    : HeroesModel[],
    search   : string | null
};

export const initialState: HeroesState = {
    heroeTemp : null,
    loading   : false,
    heroes     : [],
    error     : null,
    search    : null
};
