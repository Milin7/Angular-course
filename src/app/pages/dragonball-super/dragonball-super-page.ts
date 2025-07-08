import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

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
