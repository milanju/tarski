isValidWord = function (word) {
  console.log(word);

  var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  var predicateOneArg = [
    'Triangle', 'Square', 'Pentagon',
    'Small', 'Medium', 'Large'
  ];
  var predicateTwoArgs = [
    'SameSize', 'BelowOf', 'LeftOf',
    'RightOf', 'AboveOf', 'Adjoins',
    'SameCol', 'SameRow', 'Between',
    'Smaller', 'Larger', 'SameShape'
  ];
  var variables = ['x', 'y', 'z', 'u', 'v', 'w'];
  // var operatorSingle = ['!'];
  var quantors = ['A', 'E'];
  var operatorsDuo = ['&&', '||', '=>', '<=>', '=', '!=', '_'];

  // Check for predicateSingleArgs(letter)
  for (var i = 0; i < predicateOneArg.length; i++) {
    for (var j = 0; j < letters.length; j++) {
      if(word === predicateOneArg[i] + '(' + letters[j] + ')') {
        return true;
      }
    }
  }

  // Check for predicateTwoArgs()
  for (var i = 0; i < predicateTwoArgs.length; i++) {
    for (var j = 0; j < letters.length; j++) {
      for (var k = 0; k < letters.length; k++) {
        if(word === predicateTwoArgs[i] + '(' + letters[j] + ',' + letters[k] + ')') {
          return true;
        }
      }
    }
  }

  // Check for operators
  var wordIsOperator = false;
  operatorsDuo.forEach(function (op) {
    if (word === op) wordIsOperator = true;
  });
  if (word === '!') return true;
  if (wordIsOperator) return true;

  return false;
}
