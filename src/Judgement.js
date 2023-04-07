const { Console } = require('@woowacourse/mission-utils');
const Print = require('./Print');
const Validation = require('./Validation');
const { WINNING_AMOUNT, LOTTO_PRICE } = require('./constants/constants');

class Judgement {
  #winningNumber;
  #bonusNumber;
  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
  }

  result(myLotto, bonus) {
    const counts = myLotto.map((lotto) => [
      lotto.number,
      this.match(lotto.number),
    ]);
    const prize = this.count(counts, bonus);

    Print.result(prize);

    this.rateOfReturn(myLotto.length * LOTTO_PRICE, prize);
  }

  match(numbers) {
    return numbers.reduce(
      (acc, number) => (this.#winningNumber.includes(number) ? acc + 1 : acc),
      0
    );
  }

  count(counts, bonus) {
    const prize = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    counts.forEach(([numbers, count]) => {
      switch (count) {
        case 6:
          prize.first += 1;
          break;
        case 5:
          numbers.includes(bonus) ? (prize.second += 1) : (prize.third += 1);
          break;
        case 4:
          prize.fourth += 1;
          break;
        case 3:
          prize.fifth += 1;
          break;
      }
    });

    return prize;
  }

  rateOfReturn(purchasePrice, { first, second, third, fourth, fifth }) {
    const profit =
      first * WINNING_AMOUNT.FIRST +
      second * WINNING_AMOUNT.SECOND +
      third * WINNING_AMOUNT.THIRD +
      fourth * WINNING_AMOUNT.FOURTH +
      fifth * WINNING_AMOUNT.FIFTH;
    const rate = (profit / purchasePrice) * 100;
    const roundRate = Math.round((rate + Number.EPSILON) * 100) / 100;

    Print.rateOfReturn(roundRate);
  }
}

module.exports = Judgement;
