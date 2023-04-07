const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class MyLotto {
  #amount;
  #myLotto;
  constructor(purchasePrice) {
    this.#amount = Number(purchasePrice) / 1000;
    this.#myLotto = this.purchase();
  }

  get amount() {
    return this.#amount;
  }

  get myLotto() {
    return this.#myLotto;
  }

  purchase() {
    return new Array(this.#amount) //
      .fill(0)
      .map(() => new Lotto());
  }
}

module.exports = MyLotto;
