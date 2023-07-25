const add = require('../add.js');

// 'add' = 테스트코드 프로그램의 이름
// expect = 함수를 수행했을 때
// toBe = 결과 값

test('add', () => {
  // 테스트코드 작성
  expect(add(1, 2)).toBe(3);
});
