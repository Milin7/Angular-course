import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DragonballAdd } from "../../components/dragonball-add/dragonball-add";

@Component({
  selector: 'app-dragonball-page',
  imports: [DragonballAdd],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

  addCharacter = () => {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((currentCharacters) => [
      ...currentCharacters,
      newCharacter,
    ]);
    this.resetFields();
  };

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
