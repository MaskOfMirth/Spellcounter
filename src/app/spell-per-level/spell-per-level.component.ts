import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spell-per-level',
  standalone: true,
  imports: [],
  templateUrl: './spell-per-level.component.html',
  styleUrl: './spell-per-level.component.css'
})
export class SpellPerLevelComponent {
  @Input() classLevel!: number;

  public casting1(){

  }

}
