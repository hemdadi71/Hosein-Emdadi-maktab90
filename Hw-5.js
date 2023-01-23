'use strict';

const Pedometer = {
  step: 0,
  reset() {
    this.step = 0;
    return this;
  },
  Increase() {
    this.step++;
    return this;
  },
  Decrease() {
    this.step--;
    return this;
  },
  read() {
    console.log(this.step);
    return this;
  },
};
// Pedometer.Increase().read().reset().Decrease().read().reset().read();
