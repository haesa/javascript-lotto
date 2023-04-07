const { Random } = require('@woowacourse/mission-utils');

class Lotto {
  #number;
  constructor() {
    this.#number = this.create();
  }

  get number() {
    return this.#number;
  }

  create() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}
module.exports = Lotto;
