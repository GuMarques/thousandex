interface Pokemon {
    name: string;
    type: Array<Type>;
    image: string;
    number: number;
    weight: number;
    height: number;
    abilities: Array<string>;
    description: string;
    color: string;
    stats: {
        hp: number,
        attack: number;
        defense: number;
        specialattack: number;
        specialdefense: number;
        speed: number;
    }
}