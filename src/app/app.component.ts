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
  spellPerLevelList = [
    {
      classLevel: 1,
      spellLevel1: 2
    },
    {
      classLevel: 2,
      spellLevel1: 3,
    },
    {
      classLevel: 3,
      spellLevel: 4,
      spellLevel2: 2
    },
    {
      classLevel: 4,
      spellLevel: 4,
      spellLevel2: 3
    },
    {
      classLevel: 5,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 2
    },
    {
      classLevel: 6,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3
    },
    {
      classLevel: 7,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 1
    },
    {
      classLevel: 8,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 2
    },
    {
      classLevel: 9,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 1
    },
    {
      classLevel: 10,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2
    },
    {
      classLevel: 11,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1
    },
    {
      classLevel: 12,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1
    },
    {
      classLevel: 13,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1,
      spellLevel7: 1
    },
    {
      classLevel: 14,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1,
      spellLevel7: 1
    },
    {
      classLevel: 15,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1,
      spellLevel7: 1,
      spellLevel8: 1

    },
    {
      classLevel: 16,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1,
      spellLevel7: 1,
      spellLevel8: 1
    },
    {
      classLevel: 17,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 2,
      spellLevel6: 1,
      spellLevel7: 1,
      spellLevel8: 1,
      spellLevel9: 1
    },
    {
      classLevel: 18,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 3,
      spellLevel6: 1,
      spellLevel7: 1,
      spellLevel8: 1,
      spellLevel9: 1
    },
    {
      classLevel: 19,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 3,
      spellLevel6: 2,
      spellLevel7: 1,
      spellLevel8: 1,
      spellLevel9: 1
    },
    {
      classLevel: 20,
      spellLevel: 4,
      spellLevel2: 3,
      spellLevel3: 3,
      spellLevel4: 3,
      spellLevel5: 3,
      spellLevel6: 2,
      spellLevel7: 2,
      spellLevel8: 1,
      spellLevel9: 1
    },
  ]
}
