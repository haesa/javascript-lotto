const { Random } = require('@woowacourse/mission-utils');

class MyLotto {
  #amount;
  #myLotto;
  constructor(purchasePrice) {
    this.#amount = Number(purchasePrice) / 1000;
    this.#myLotto = [];
  }

  get amount() {
    return this.#amount;
  }

  get myLotto() {
    return this.#myLotto;
  }

  purchase() {
    const lottos = [];

    for (let i = 0; i < this.#amount; i++) {
      lottos.push(this.create());
    }

    this.#myLotto = lottos;
  }

  create() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = MyLotto;
