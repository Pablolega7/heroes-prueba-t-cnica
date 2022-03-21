

export interface HeroesModel {

    superHero  : string,
    characters : string,
    id         : string,
    power      : string,
    publisher  : string,
    favorite   : boolean
};

export class Heroes implements HeroesModel {

    constructor( public superHero: string, public characters: string, public id: string, public power: string, public publisher: string, public favorite: boolean )
    {}
};