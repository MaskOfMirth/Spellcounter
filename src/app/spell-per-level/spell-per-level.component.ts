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

  loadPreviousStatus(){
    let status: any = localStorage.getItem("CurrentStatus")
    this.spellPerLevelList = JSON.parse(status)
    let level: any = localStorage.getItem("level")
    this.casterLevel = JSON.parse(level)
  }

  saveCurrentStatus(){
    let status = this.spellPerLevelList;
    localStorage.setItem("CurrentStatus", JSON.stringify(status))
    let level = this.casterLevel;
    localStorage.setItem("level", JSON.stringify(level))
  }

  castSpell(spellPerLevel: ( Spell[] | undefined), slotPosition: number){
    if(spellPerLevel == undefined){
      console.error("Array ist nicht definiert")
      return;
    }
        spellPerLevel[slotPosition].slotName = (spellPerLevel[slotPosition].remainingDays).toString();
        spellPerLevel[slotPosition].remainingDays = spellPerLevel[slotPosition].spellLevel*2;
        spellPerLevel[slotPosition].onCoolDown = true;
  }

  passDay(currentCasterLevel: CasterLevel){
    this.globalTime++
    this.selectSpellLevelX(currentCasterLevel.spellLevel1);
    this.selectSpellLevelX(currentCasterLevel.spellLevel2);
    this.selectSpellLevelX(currentCasterLevel.spellLevel3);
    this.selectSpellLevelX(currentCasterLevel.spellLevel4);
    this.selectSpellLevelX(currentCasterLevel.spellLevel5);
    this.selectSpellLevelX(currentCasterLevel.spellLevel6);
    this.selectSpellLevelX(currentCasterLevel.spellLevel7);
    this.selectSpellLevelX(currentCasterLevel.spellLevel8);
    this.selectSpellLevelX(currentCasterLevel.spellLevel9);
  }

  private selectSpellLevelX(selectedSpellLevel: Spell[] | undefined) {
    if(selectedSpellLevel == undefined){
      return;
    }
    for (const spell of selectedSpellLevel) {
      this.rechargingSpell(spell)
    }
  }

  private rechargingSpell(spell: Spell) {
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

  spellPerLevelList: CasterLevel[] = [
    {
      spellLevel1: [  
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ]
    },
    {

      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ]

    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Ready", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Ready", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Ready", remainingDays: 18, onCoolDown: false}
      ]
    },
    {
      spellLevel1: [
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false},
        {spellLevel: 1,slotName: "Ready", remainingDays: 2, onCoolDown: false}
      ],
      spellLevel2: [
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false},
        {spellLevel: 2,slotName: "Ready", remainingDays: 4, onCoolDown: false}
      ],
      spellLevel3: [
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false},
        {spellLevel: 3,slotName: "Ready", remainingDays: 6, onCoolDown: false}
      ],
      spellLevel4: [
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false},
        {spellLevel: 4,slotName: "Ready", remainingDays: 8, onCoolDown: false}
      ],
      spellLevel5: [
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false},
        {spellLevel: 5,slotName: "Ready", remainingDays: 10, onCoolDown: false}
      ],
      spellLevel6: [
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false},
        {spellLevel: 6,slotName: "Ready", remainingDays: 12, onCoolDown: false}
      ],
      spellLevel7: [
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false},
        {spellLevel: 7,slotName: "Ready", remainingDays: 14, onCoolDown: false}
      ],
      spellLevel8: [
        {spellLevel: 8,slotName: "Ready", remainingDays: 16, onCoolDown: false}
      ],
      spellLevel9: [
        {spellLevel: 9,slotName: "Ready", remainingDays: 18, onCoolDown: false}
      ]
    },
  ]
}
