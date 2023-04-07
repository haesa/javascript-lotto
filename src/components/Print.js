const { Console } = require('@woowacourse/mission-utils');
const {
  LOTTO_RESULT,
  PURCHASE,
  STATISTICS,
} = require('../constants/constants');

class Print {
  constructor() {}

  static purchase(lottos) {
    Console.print(PURCHASE.MESSAGE(lottos.amount));

    lottos.myLotto.forEach((lotto) => lotto.number.sort((a, b) => a - b));
    lottos.myLotto.forEach((lotto) =>
      Console.print(`[${lotto.number.join(', ')}]`)
    );
  }

  static result(prize) {
    Console.print(STATISTICS);
    Console.print(`${LOTTO_RESULT.THREE}${prize.fifth}개`);
    Console.print(`${LOTTO_RESULT.FOUR}${prize.fourth}개`);
    Console.print(`${LOTTO_RESULT.FIVE}${prize.third}개`);
    Console.print(`${LOTTO_RESULT.FIVE_BONUS}${prize.second}개`);
    Console.print(`${LOTTO_RESULT.SIX}${prize.first}개`);
  }

  static earningsRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}
module.exports = Print;
