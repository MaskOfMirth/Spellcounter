import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Spell } from '../spell';
import { __extends } from 'tslib';
import { CasterLevel } from '../caster-level';

@Component({
  selector: 'app-spell-per-level',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './spell-per-level.component.html',
  styleUrl: './spell-per-level.component.css'
})
export class SpellPerLevelComponent {
  
  public casterLevel: number = 1;
  public globalTime: number = 0;
  cdVariable: number = 0;

  castSpell(spellPerLevel: ( Spell[] | undefined), slotPosition: number){
    if(spellPerLevel == undefined){
      console.error("Array ist nicht definiert")
      return;
    }
        spellPerLevel[slotPosition].slotName = (spellPerLevel[slotPosition].remainingDays).toString();
        spellPerLevel[slotPosition].remainingDays = spellPerLevel[slotPosition].spellLevel*2;
        spellPerLevel[slotPosition].onCoolDown = true;
 }

  passDay(currentCasterLevel: CasterLevel, casterLevel: number){
    if(currentCasterLevel == undefined){
      console.error("Array ist nicht definiert")
      return;
    }
    this.globalTime++
    for (const spell of currentCasterLevel.spellLevel1) {
      if(spell.onCoolDown == true){
        spell.remainingDays--
        spell.slotName = spell.remainingDays.toString()
        if(spell.remainingDays == 0){
          spell.slotName = "Ready";
          spell.remainingDays = spell.spellLevel*2;
          spell.onCoolDown = false;
        }
      }
    }
  }

  spellPerLevelList: CasterLevel[] = [
    {
      spellLevel1: [  
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ]
    },
    {

      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ]

    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
        {spellLevel: 6,slotName: "Slot 2", remainingDays: 12, onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", remainingDays: 12, onCoolDown: false},
        {spellLevel: 6,slotName: "Slot 2", remainingDays: 12, onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", remainingDays: 14, onCoolDown: false},
        {spellLevel: 7,slotName: "Slot 2", remainingDays: 14, onCoolDown: false}
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", remainingDays: 18, onCoolDown: false}
      ]
    },
  ]
}
