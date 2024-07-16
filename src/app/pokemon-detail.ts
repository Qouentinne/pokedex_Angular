interface Move {
    Type: string;
    Catégorie: string;
    Puissance: string;
    Précision: string;
    PP: number;
    LGPE: number;
}

interface Stats {
    PV: number;
    Attaque: number;
    Défense: number;
    "Attaque Spéciale": number;
    "Défense Spéciale": number;
    Vitesse: number;
    "Somme des statistiques de base": number;
    "Moyenne des statistiques de base": number;
}

interface PokemonStats {
    "Statistique de base": Stats;
}

export interface PokemonDetail {types: string[];
    stats: PokemonStats;
    moves: Move[];
    id: number;
    name: string;
}
