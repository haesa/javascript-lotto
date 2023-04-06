const { Random, Console } = require('@woowacourse/mission-utils');
const Validate = require('./Validate');

class MyLotto {
  constructor(purchasePrice) {
    new Validate().myLotto(purchasePrice);
    this.amount = Number(purchasePrice) / 1000;
    this.myLotto = [];
  }

  purchase() {
    const lottos = [];

    for (let i = 0; i < this.amount; i++) {
      lottos.push(this.create());
    }

    this.myLotto = lottos;
  }

  create() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  print() {
    Console.print(`\n${this.amount}개를 구매했습니다.`);
    this.sort();
    this.myLotto.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  sort() {
    this.myLotto.forEach((numbers) => numbers.sort((a, b) => a - b));
  }
}

module.exports = MyLotto;
