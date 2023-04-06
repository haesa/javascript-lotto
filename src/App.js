const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const MyLotto = require('./MyLotto');
const Validation = require('./Validation');

const {
  PURCHASE_PRICE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
} = require('./constants/constants');

class App {
  #winningNumber;
  #lottos;
  constructor() {}

  play() {
    Console.readLine(PURCHASE_PRICE_MESSAGE, (answer) => this.start(answer));
  }

  start(answer) {
    new Validation().myLotto(answer);
    this.#lottos = new MyLotto(answer);
    this.#lottos.purchase();
    this.#lottos.print();

    Console.readLine(WINNING_NUMBER_MESSAGE, (answer) => this.input(answer));
  }

  input(answer) {
    const numbers = answer.split(',').map(Number);
    const myLotto = this.#lottos.myLotto;

    new Validation().lotto(numbers);
    this.#winningNumber = new Lotto(numbers);
    this.#winningNumber.inputBonus(myLotto);
  }
}

module.exports = App;
