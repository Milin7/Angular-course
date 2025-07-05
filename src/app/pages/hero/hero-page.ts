import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPage {
  name: WritableSignal<string> = signal('IronMan');
  age: WritableSignal<number> = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.update((c) => (c = 'SpiderMan'));
    this.age.update((c) => (c = 22));
  }

  changeAge() {
    this.age.update((c) => (c = 22));
  }
  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }
}
