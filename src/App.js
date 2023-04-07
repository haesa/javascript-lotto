const { Console } = require('@woowacourse/mission-utils');
const WinningNumber = require('./WinningNumber');
const MyLotto = require('./MyLotto');
const Validation = require('./Validation');
const print = require('./Print');

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
    new Validation().lottoPrice(answer);
    this.#lottos = new MyLotto(answer);
    this.#lottos.purchase();
    print(this.#lottos);

    Console.readLine(WINNING_NUMBER_MESSAGE, (answer) => this.input(answer));
  }

  input(answer) {
    const numbers = answer.split(',').map(Number);
    const myLotto = this.#lottos.myLotto;

    new Validation().winningNumber(numbers);
    this.#winningNumber = new WinningNumber(numbers);
    this.#winningNumber.inputBonus(myLotto);
  }
}

module.exports = App;
