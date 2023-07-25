const Calculator = require('../calculator.js');

// 각각의 테스트는 서로 독립적이다.
// 테스트 함수에 미리 const cal = new Calculator();를 선언 불가
// 이걸 해결가능한 코드가 beforeEach
// 테스트코드는 모두 콜백함수를 사용

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    // const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    // const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.add(5);
    expect(cal.value).toBe(5);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it('subtract', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiply', () => {
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  });

  it('divide', () => {
    cal.set(4);
    cal.divide(2);
    expect(cal.value).toBe(2);
  });
});
