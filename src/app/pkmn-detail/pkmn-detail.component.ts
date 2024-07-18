import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail } from '../pokemon-detail';
import { CommonModule } from '@angular/common';
import { TypeDisplayComponent } from '../type-display/type-display.component';

@Component({
  selector: 'app-pkmn-detail',
  standalone: true,
  imports: [CommonModule, TypeDisplayComponent],
  templateUrl: './pkmn-detail.component.html',
  styleUrl: './pkmn-detail.component.css'
})
export class PkmnDetailComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    pokemonDetails: PokemonDetail | undefined
    pokemonService: PokemonService = inject(PokemonService)
    imgURL: string = ''

    constructor () {
        const pokemonId = parseInt(this.route.snapshot.params['id'], 10);
        this.imgURL = `https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${pokemonId}/regular.png`
        this.pokemonService.getPokemonById(pokemonId).subscribe(
            pkmn_details => this.pokemonDetails = pkmn_details
        )
    }
}
