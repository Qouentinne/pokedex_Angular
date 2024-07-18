import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-display',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './type-display.component.html',
  styleUrl: './type-display.component.css'
})
export class TypeDisplayComponent implements OnInit {
    @Input() type: string = '';

    imageUrl: string = '';
    backgroundColor: string = '';

    ngOnInit(): void {
        this.imageUrl = `images/type_img/${this.type.toLowerCase()}.png`;
        this.backgroundColor = `var(--${this.type.toLowerCase()}-color)`;
    }

}
