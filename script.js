// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code): 
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node script.js"

function factorial(num) {
  if (num < 2) {
    return num;
  }

  return num * factorial(num - 1);
}

console.log(factorial(10));