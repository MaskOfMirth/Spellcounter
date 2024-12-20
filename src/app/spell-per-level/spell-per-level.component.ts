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
  castSpell(spellPerLevel: (string[] | undefined), slotPosition: number, cdVariable: number){
    if(spellPerLevel == undefined){
      console.error("Array ist nicht definiert")
      return;
    }
    switch(cdVariable){
      case 1:
        spellPerLevel[slotPosition] = "2";
        this.clicked[slotPosition] = true;
        break;
      case 2:
        spellPerLevel[slotPosition] = "4"
        break;
      case 3:
        spellPerLevel[slotPosition] = "6";
        break;
      case 4:
        spellPerLevel[slotPosition] = "8";
        break;
      case 5:
        spellPerLevel[slotPosition] = "10";
        break;
      case 6:
        spellPerLevel[slotPosition] = "12";
        break;
      case 7:
        spellPerLevel[slotPosition] = "14";
        break;
      case 8:
        spellPerLevel[slotPosition] = "16";
        break;
      case 9:
        spellPerLevel[slotPosition] = "18";
        break;
    }

    // let dayOfCast: number = this.globalTime.valueOf();
    // if(this.globalTime === dayOfCast+2){
    //   spellPerLevel[slotPosition] = "Ready"
    // }
    // else{
    //    spellPerLevel[slotPosition] = dayOfCast.toString()
    // }
  }

  // lockButton(slotPosition: number){
  //   this.clicked = true
  // }

  passDay(){
    this.globalTime++
  }

  clicked: boolean[] = [
    false,false,false,false
  ]

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
  public globalTime: number = 0;
  cdVariable: number = 0;
}
