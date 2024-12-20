import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Spell } from '../spell';
import { __extends } from 'tslib';

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
        spellPerLevel[slotPosition].slotName = (spellPerLevel[slotPosition].spellLevel*2).toString();
        spellPerLevel[slotPosition].onCoolDown = true
 }

  passDay(){
    this.globalTime++
  }

  spellPerLevelList = [
    {
      classLevel: 1,
      spellLevel1: [  
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false}
      ]
    },
    {
      classLevel: 2,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false}
      ]
    },
    {
      classLevel: 3,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false}
      ]
    },
    {
      classLevel: 4,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false}
      ]
    },
    {
      classLevel: 5,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false}
      ]
    },
    {
      classLevel: 6,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ]
    },
    {
      classLevel: 7,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false}
      ]
    },
    {
      classLevel: 8,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false}
      ]
    },
    {
      classLevel: 9,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
      ]
    },
    {
      classLevel: 10,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ]
    },
    {
      classLevel: 11,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ]
    },
    {
      classLevel: 12,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ]
    },
    {
      classLevel: 13,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ]
    },
    {
      classLevel: 14,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ]
    },
    {
      classLevel: 15,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ]

    },
    {
      classLevel: 16,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ]
    },
    {
      classLevel: 17,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", onCoolDown: false}
      ]
    },
    {
      classLevel: 18,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", onCoolDown: false}
      ]
    },
    {
      classLevel: 19,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 6,slotName: "Slot 2", onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", onCoolDown: false}
      ]
    },
    {
      classLevel: 20,
      spellLevel1: [
        {spellLevel: 1,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 3", onCoolDown: false},
        {spellLevel: 1,slotName: "Slot 4", onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 2,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 3,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 4,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 2", onCoolDown: false},
        {spellLevel: 5,slotName: "Slot 3", onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 6,slotName: "Slot 2", onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Slot 1", onCoolDown: false},
        {spellLevel: 7,slotName: "Slot 2", onCoolDown: false}
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Slot 1", onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Slot 1", onCoolDown: false}
      ]
    },
  ]
}
