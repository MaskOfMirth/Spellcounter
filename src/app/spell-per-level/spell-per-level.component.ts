import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spell-per-level',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './spell-per-level.component.html',
  styleUrl: './spell-per-level.component.css'
})
export class SpellPerLevelComponent {
  spellPerLevelList = [
    {
      classLevel: 1,
      spellLevel1: ["Slot 1", "Slot 2"]
    },
    {
      classLevel: 2,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3"]
    },
    {
      classLevel: 3,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2"]
    },
    {
      classLevel: 4,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"]
    },
    {
      classLevel: 5,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2"]
    },
    {
      classLevel: 6,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"]
    },
    {
      classLevel: 7,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1"]
    },
    {
      classLevel: 8,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2"]
    },
    {
      classLevel: 9,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1"]
    },
    {
      classLevel: 10,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"]
    },
    {
      classLevel: 11,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"]
    },
    {
      classLevel: 12,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"]
    },
    {
      classLevel: 13,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"]
    },
    {
      classLevel: 14,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"]
    },
    {
      classLevel: 15,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"],
      spellLevel8: ["Slot 1"]

    },
    {
      classLevel: 16,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"],
      spellLevel8: ["Slot 1"]
    },
    {
      classLevel: 17,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"],
      spellLevel8: ["Slot 1"],
      spellLevel9: ["Slot 1"]
    },
    {
      classLevel: 18,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel6: ["Slot 1"],
      spellLevel7: ["Slot 1"],
      spellLevel8: ["Slot 1"],
      spellLevel9: ["Slot 1"]
    },
    {
      classLevel: 19,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel6: ["Slot 1", "Slot 2"],
      spellLevel7: ["Slot 1"],
      spellLevel8: ["Slot 1"],
      spellLevel9: ["Slot 1"]
    },
    {
      classLevel: 20,
      spellLevel1: ["Slot 1", "Slot 2", "Slot 3", "Slot 4"],
      spellLevel2: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel3: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel4: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel5: ["Slot 1", "Slot 2", "Slot 3"],
      spellLevel6: ["Slot 1", "Slot 2"],
      spellLevel7: ["Slot 1", "Slot 2"],
      spellLevel8: ["Slot 1"],
      spellLevel9: ["Slot 1"]
    },
  ]
  public casterLevel: number = 1;
}
