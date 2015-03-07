isValidWord = function(word){
  if(word === "Triangle(a)" ||
     word === "Triangle(b)" ||
     word === "Triangle(c)" ||
     word === "Square(a)" ||
     word === "Square(b)" ||
     word === "Square(c)" ||
     word === "Pentagon(a)" ||
     word === "Pentagon(b)" ||
     word === "Pentagon(c)" ||
     word === "LeftOf(a, b)" ||
     word === "LeftOf(b, a)" ||
     word === "LeftOf(a, c)" ||
     word === "LeftOf(c, a)" ||
     word === "LeftOf(b, c)" ||
     word === "LeftOf(c, b)" ||
     word === "RightOf(a, b)" ||
     word === "RightOf(b, a)" ||
     word === "RightOf(a, c)" ||
     word === "RightOf(c, a)" ||
     word === "RightOf(b, c)" ||
     word === "RightOf(c, b)"
     ){
    console.log("valid!");
    return true;
  }
  console.log("invalid!");
  return false;
};
