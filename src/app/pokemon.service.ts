import { Injectable } from '@angular/core';
import { APIPokemonSummary, PokemonSummary } from './pokemon-summary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { PokemonDetail } from './pokemon-detail';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private _httpClient: HttpClient) {
     }
    readonly baseImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    readonly apiURL = "http://localhost:5638"
    allPokemonsSummary: PokemonSummary[] = []
    getSamplePokemonsSummary(): PokemonSummary[] {
        return [
            {
                name: "Bulbizarre",
                id: 1,
                img_url: `${this.baseImgUrl}/1.png`
            },

            {
                name: "Nidoqueen",
                id: 31,
                img_url: `${this.baseImgUrl}/31.png`
            },

            {
                name: "Rondoudou",
                id: 39,
                img_url: `${this.baseImgUrl}/39.png`
            },


        ]
    }

    getAllPokemonsSummary(): Observable<PokemonSummary[]> {
        return this._httpClient.get<APIPokemonSummary>(`${this.apiURL}/pokemons`)
            .pipe(map(payload => payload.data))
    }

    getPokemonById(id: number) : Observable<PokemonDetail>{
        return this._httpClient.get<PokemonDetail>(`${this.apiURL}/pokemon/${id}`)
    }

}
