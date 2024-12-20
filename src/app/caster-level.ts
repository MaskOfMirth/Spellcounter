import { Spell } from "./spell";

export interface CasterLevel {
    spellLevel1: Spell[]
    spellLevel2?: Spell[]
    spellLevel3?: Spell[]
    spellLevel4?: Spell[]
    spellLevel5?: Spell[]
    spellLevel6?: Spell[]
    spellLevel7?: Spell[]
    spellLevel8?: Spell[]
    spellLevel9?: Spell[]
}
