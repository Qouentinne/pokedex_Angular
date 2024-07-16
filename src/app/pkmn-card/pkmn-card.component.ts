import { Component, Input } from '@angular/core';
import { PokemonSummary } from '../pokemon-summary';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pkmn-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pkmn-card.component.html',
  styleUrl: './pkmn-card.component.css'
})
export class PkmnCardComponent {
    @Input() pkmnCard!: PokemonSummary;
}
