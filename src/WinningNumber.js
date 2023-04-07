const { Console } = require('@woowacourse/mission-utils');
const Bonus = require('./Bonus');
const Print = require('./Print');
const {
  BONUS_NUMBER_MESSAGE,
  WINNING_AMOUNT,
  LOTTO_PRICE,
} = require('./constants/constants');

class WinningNumber {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
  }

  inputBonus(myLotto) {
    Console.readLine(BONUS_NUMBER_MESSAGE, (answer) => {
      const bonus = new Bonus(answer, this.#numbers);

      this.result(myLotto, bonus.number);
      Console.close();
    });
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
      (acc, number) => (this.#numbers.includes(number) ? acc + 1 : acc),
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

module.exports = WinningNumber;
