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
    const lottos = [];

    for (let i = 0; i < this.#amount; i++) {
      lottos.push(new Lotto());
    }

    return lottos;
  }
}

module.exports = MyLotto;
