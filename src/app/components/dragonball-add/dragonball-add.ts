import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.html',
})
export class DragonballAdd {
  name = signal('');
  power = signal(0);
  addCharacter = () => {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    };
    console.log({ newCharacter });
    // this.characters.update((currentCharacters) => [
    //   ...currentCharacters,
    //   newCharacter,
    // ]);
    // this.resetFields();
  };
}
