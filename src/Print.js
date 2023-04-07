const { Console } = require('@woowacourse/mission-utils');

function print(lottos) {
  Console.print(`\n${lottos.amount}개를 구매했습니다.`);
  sort(lottos);
  lottos.myLotto.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
}

function sort(lottos) {
  lottos.myLotto.forEach((numbers) => numbers.sort((a, b) => a - b));
}
module.exports = print;
