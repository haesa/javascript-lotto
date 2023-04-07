const { Console } = require('@woowacourse/mission-utils');
const Judgement = require('./Judgement');
const MyLotto = require('./MyLotto');
const Validation = require('./Validation');
const Print = require('./Print');
const {
  BONUS_NUMBER_MESSAGE,
  PURCHASE_PRICE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
} = require('./constants/constants');

class App {
  #lottos;
  #winningNumber;
  constructor() {}

  play() {
    Console.readLine(PURCHASE_PRICE_MESSAGE, (answer) => this.start(answer));
  }

  start(answer) {
    Validation.lottoPrice(answer);
    this.#lottos = new MyLotto(answer);
    Print.purchase(this.#lottos);

    Console.readLine(WINNING_NUMBER_MESSAGE, (answer) =>
      this.winningNumber(answer)
    );
  }

  winningNumber(answer) {
    this.#winningNumber = answer.split(',').map(Number);
    Validation.winningNumber(this.#winningNumber);

    Console.readLine(BONUS_NUMBER_MESSAGE, (answer) =>
      this.bonusNumber(answer)
    );
  }

  bonusNumber(bonusNumber) {
    Validation.bonus(bonusNumber, this.#winningNumber);
    const judgement = new Judgement(this.#winningNumber, bonusNumber);
    judgement.result(this.#lottos.myLotto);
    Console.close();
  }
}

module.exports = App;
