import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPage {
  counter = 0;
  counterSignal = signal(0);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
