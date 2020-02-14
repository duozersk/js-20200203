function sortStrings(arr, param = 'asc') {
  switch (param) {
  case 'asc':
    return makeSorting(arr, 1);
  case 'desc':
    return makeSorting(arr, -1);
  default:
    return makeSorting(arr, 1);
  }

  function makeSorting(array, direction) {
    return array.sort((a, b) =>
      direction * a.localeCompare(b, 'defualt', {caseFirst: 'upper'}));
  }
}

console.assert(String(sortStrings(['b', 'c', 'a'])) === String(['a', 'b', 'c']) , `should return sorted by ask array of strings ['a', 'b', 'c']`);
console.assert(String(sortStrings(['b', 'c', 'a'], 'desc')) === String(['c', 'b', 'a']), `should return sorted by desc array of strings ['c', 'b', 'a']`);
console.assert(String(sortStrings(['абрикос', 'яблоко', 'ёжик'])) === String(['абрикос', 'ёжик', 'яблоко']), `should return sorted by ask array of strings ['абрикос', 'ёжик', 'яблоко']`);
console.assert(String(sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик'])) === String(['Абрикос', 'абрикос', 'Ёжик', 'ёжик', 'Яблоко', 'яблоко']), `should return sorted by ask array of strings [ 'Абрикос', 'абрикос', 'Ёжик', 'ёжик', 'Яблоко', 'яблоко' ]`);
