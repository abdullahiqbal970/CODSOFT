function enteroperator(input) {
  var display = document.getElementById("display");
  y = display.value;

  var lastCharacter = y.slice(-1);
  if (lastCharacter === "." && input === ".") {
    display.value = y;
  } else {
    var operatorPattern = /[+\-%*/]$/;
    if (operatorPattern.test(y)) {
      var operators = ["+", "-", "*", "/", "%"];

      // Check if the last character of the string is an operator
      var lastCharacter = y.slice(-1);
      if (operators.includes(lastCharacter)) {
        // Remove the last character (operator) from the string
        y = y.slice(0, -1);
        y += input;
        display.value = y;
      }
    } else {
      display.value += input;
    }
  }
}

function calculateResult() {
  var display = document.getElementById("display");
  y = display.value;

  // check the first digit shoukd not "*" and "/"
  const operator = ["*", "/"];
  if (operator.includes(y.charAt(0))) {
    display.value = "error";
  } else {

    // not albhabet letter in calculations
    var alphabetPattern = /[a-zA-Z]+/g;
    var alphabetCharacters = y.match(alphabetPattern);
    if (alphabetCharacters) {
      display.value = "error";
    } else {
      // var parts = y.split(/\s+/);

    //   not double "." in single number
      var operators = /[+\-*%/]/; 
      var parts = y.split(operators);

      var hasError = false;
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf(".") !== parts[i].lastIndexOf(".")) {
          hasError = true;
          break; 
        }
      }

      if (hasError) {
        display.value = "error";
      } else {

        // remove last operators
        var operatorPattern = /[+\-%*./]$/;
        if (operatorPattern.test(y)) {
          var operators = ["+", "-", "*", "/", ".", "%"];

          // Check if the last character of the string is an operator
          var lastCharacter = y.slice(-1);
          if (operators.includes(lastCharacter)) {
            // Remove the last character (operator) from the string
            y = y.slice(0, -1);
          }
        }

        let x = eval(y);
        var pattern = /\d+/;

        if (pattern.test(x)) {
          if (x % 1 !== 0) {
            display.value = x.toFixed(3);
          } else {
            display.value = x;
          }
        }
      }
    }
  }
}
