import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { DragonballAdd } from "../../components/dragonball-add/dragonball-add";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, DragonballAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  removeCharacter = (id: number) => {
    this.characters.update((currentCharacters) => {
      return currentCharacters.filter((character) => character.id !== id);
    });
  };
}
