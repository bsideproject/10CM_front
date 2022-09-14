module.exports = {
  singleQuote: true,
  // 문자열은 singleQuote ("" -> '')
  semi: true,
  // 코드 마지막에 세미콜론 있도록 formatting (합의 필요)
  tabWidth: 2,
  // 들여쓰기는 2, 합의가 필요
  trailingComma: 'all',
  // 배열 키:값 뒤에 항상 콤마 포맷팅
  arrowParens: 'avoid',
  // 화살표 함수가 하나의 매개변수를 받을 때 괄호 생략 포맷팅(합의 필요)
  endOfLine: 'auto'
  // windows에 뜨는 'delete cr에러 해결
}