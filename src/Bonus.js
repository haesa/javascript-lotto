const Validation = require('./Validation');

class Bonus {
  constructor(number, numbers) {
    Validation.bonus(number, numbers);
    this.number = Number(number);
  }
}

module.exports = Bonus;
