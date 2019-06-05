/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];    
  
    tokens.forEach((t) => {
      switch (t) {
        case "+": {
          stack.push(stack.pop()+stack.pop());
          break;
        }
        case "-": {
          const sub = stack.pop();
          stack.push(stack.pop()-sub);
          break;
        }
        case "*": {
          stack.push(stack.pop()*stack.pop());
          break;
        }
        case "/": {
          const divider = stack.pop();
          stack.push(stack.pop() / divider >> 0);
          break;
        }
        default: stack.push(Number(t));
      }
    });
    
    return stack.pop();
};
