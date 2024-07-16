export interface PokemonSummary {
    name: string;
    id: number;
    img_url: string
}

export interface APIPokemonSummary {
    data: PokemonSummary[]
}
