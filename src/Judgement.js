const { Console } = require('@woowacourse/mission-utils');
const Print = require('./Print');
const { WINNING_AMOUNT, LOTTO_PRICE } = require('./constants/constants');

class Judgement {
  #winningNumber;
  #bonusNumber;
  #prize;
  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#prize = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  get profit() {
    const { first, second, third, fourth, fifth } = this.#prize;
    return (
      first * WINNING_AMOUNT.FIRST +
      second * WINNING_AMOUNT.SECOND +
      third * WINNING_AMOUNT.THIRD +
      fourth * WINNING_AMOUNT.FOURTH +
      fifth * WINNING_AMOUNT.FIFTH
    );
  }

  result(myLotto) {
    myLotto.forEach((lotto) => this.calculatePrize(lotto));
    Print.result(this.#prize);
    this.earningsRate(myLotto.length * LOTTO_PRICE);
  }

  calculatePrize(lotto) {
    switch (this.match(lotto.number)) {
      case 6:
        this.#prize = { ...this.#prize, first: this.#prize.first + 1 };
        break;
      case 5:
        this.#prize = lotto.number.includes(this.#bonusNumber)
          ? { ...this.#prize, second: this.#prize.second + 1 }
          : { ...this.#prize, third: this.#prize.third + 1 };
        break;
      case 4:
        this.#prize = { ...this.#prize, fourth: this.#prize.fourth + 1 };
        break;
      case 3:
        this.#prize = { ...this.#prize, fifth: this.#prize.fifth + 1 };
        break;
    }
  }

  match(numbers) {
    return numbers.reduce(
      (acc, number) => (this.#winningNumber.includes(number) ? acc + 1 : acc),
      0
    );
  }

  earningsRate(purchasePrice) {
    const rate = (this.profit / purchasePrice) * 100;
    const roundRate = Math.round((rate + Number.EPSILON) * 100) / 100;
    Print.earningsRate(roundRate);
  }
}

module.exports = Judgement;
