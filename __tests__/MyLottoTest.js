const MyLotto = require('../src/components/MyLotto');

describe('로또 발행 테스트', () => {
  test('로또 발행 개수가 정확한지 확인한다.', () => {
    const myLotto = new MyLotto('8000');

    myLotto.purchase();
    expect(myLotto.myLotto.length).toBe(8);
  });
});
