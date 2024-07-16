import { Component, inject } from '@angular/core';
import { PkmnCardComponent } from '../pkmn-card/pkmn-card.component';
import { CommonModule } from '@angular/common';
import { PokemonSummary } from '../pokemon-summary';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-card-list',
    standalone: true,
    imports: [PkmnCardComponent, CommonModule],
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css'
})
export class CardListComponent {
    pkmnCardList: PokemonSummary[] = [];
    pokemonService: PokemonService = inject(PokemonService);

    constructor() {
        this.pokemonService.getAllPokemonsSummary().subscribe(
            pokemons => this.pkmnCardList = pokemons
        )
    };

}
