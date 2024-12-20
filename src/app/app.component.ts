import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpellPerLevelComponent } from './spell-per-level/spell-per-level.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpellPerLevelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spellcounter'; 
}
