const Validation = require('../src/Validation');

describe('로또 당첨 번호 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().lotto([1, 2, 'ㅇ', 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 숫자여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복을 허용하지 않습니다.');
  });

  test('로또 번호가 1과 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().lotto([1, 2, 3, 4, 46, 5]);
    }).toThrow('[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.');
  });
});

describe('로또 구매 테스트', () => {
  test('구입 금액에 숫자가 아닌 입력이 주어지면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().myLotto('105aa6');
    }).toThrow('[ERROR] 구입 금액은 숫자여야 합니다.');
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Validation().myLotto('50006');
    }).toThrow('[ERROR] 구입 금액은 1000단위여야 합니다.');
  });
});