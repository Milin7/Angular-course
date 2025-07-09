import { Component, input, Output, EventEmitter, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  onDelete = output<number>();

  characters = input.required<Character[]>();
  listName = input.required<string>();

  removeCharacter(id: number) {
    this.onDelete.emit(id);
  }
}
