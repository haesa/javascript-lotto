const {
  BONUS_ERROR,
  LOTTO_ERROR,
  MY_LOTTO_ERROR,
} = require('../constants/constants');

class Validation {
  constructor() {}

  static winningNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }

    if (numbers.some((number) => /[^0-9]/.test(number))) {
      throw new Error(LOTTO_ERROR.NUMBER);
    }

    if (
      numbers.some(
        (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(LOTTO_ERROR.DUPLICATION);
    }

    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error(LOTTO_ERROR.DOMAIN);
    }
  }

  static lottoPrice(purchasePrice) {
    if (/[^0-9]/.test(purchasePrice)) {
      throw new Error(MY_LOTTO_ERROR.NUMBER);
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error(MY_LOTTO_ERROR.UNIT);
    }
  }

  static bonus(bonus, numbers) {
    if (/[^0-9]/.test(bonus)) {
      throw new Error(BONUS_ERROR.NUMBER);
    }

    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(BONUS_ERROR.DOMAIN);
    }

    if (numbers.includes(bonus)) {
      throw new Error(BONUS_ERROR.DUPLICATION);
    }
  }
}
module.exports = Validation;
