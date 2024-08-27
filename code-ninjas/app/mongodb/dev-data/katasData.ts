const katasData = [
  {
    title: "Make Counter",
    slug: "make-counter",
    description:
      "Implement a function *makeCounter* that accepts an optional interger value and returns a function that can be called to return the next integer value. The returned function *should* reset to 0 when it is called the first time or the value that is passed in the first time.",
    example:
      "const counter = makeCounter(5); counter(); // 5\ncounter(); // 6\ncounter(); // 7",
    language: "javaScript",
    difficulty: "Easy",
    topic: "",
    initial_code:
      "// do not change function declaration \nfunction makeCounter(initialValue = 0) { \n// your code here..\n}",
    tests: [
      {
        testCase: `return makeCounter() instanceof Function`,
        description: "makeCounter() should return a function",
      },
      {
        testCase: `\nconst counter = makeCounter(); \nreturn counter() === 0`,
        description:
          "Calling the function should return the initial value of 0 (default)",
      },
      {
        testCase: `\nconst counter = makeCounter(4);\n return counter() === 4`,
        description:
          "Calling the function should return the initial value of 4 (custom)",
      },
      {
        testCase: `\nconst counter = makeCounter();\n return (counter() === 0 && counter() === 1 && counter() === 2)`,
        description: "Function can be repeatedly called with default value",
      },
      {
        testCase: `\nconst counter = makeCounter(4); \nreturn counter() === 4 && counter() === 5 && counter() === 6`,
        description:
          "const counter = makeCounter(4); return counter() === 4 && counter() === 5 && counter() === 6Function can be repeatedly called with a positive custom value",
      },
      {
        testCase: `\nconst counter = makeCounter(-4); \nreturn counter() === -4 && counter() === -3 && counter() === -2`,
        description:
          "Function can be repeatedly called with a negative custom value",
      },
      {
        testCase: `\nconst counterA = makeCounter(5);\n const counterB = makeCounter(10); return counterA() === 5 && counterB() === 10 && counterA() === 6 && counterB() === 11`,
        description:
          "Different instances should be isolated and maintain their own state",
      },
    ],
  },
  {
    title: "Mean",
    slug: "mean",
    description:
      "Write a function that returns the mean of an array of numbers.\n\nThe function should return NaN if the array is empty.",
    example: "mean([1, 2, 3, 4]) // 2.5\n mean([6, 2, 1, 8]) // 4.25",
    language: "javaScript",
    difficulty: "Easy",
    topic: "",
    initial_code:
      "// please dont change the function declaration\nfunction mean(array) {\n  // your code here\n}",
    tests: [
      {
        testCase: `const outcome = mean([]);\nreturn Number.isNaN(outcome);`,
        description: "mean([]) should return NaN",
      },
      {
        testCase: `const outcome = mean([0]);\nreturn outcome === 0;`,
        description: "mean([0]) should return 0",
      },
      {
        testCase: `const outcome = mean([1]);\nreturn outcome === 1;`,
        description: "mean([1]) should return 1",
      },
      {
        testCase: `const outcome = mean([0, 0]);\nreturn outcome === 0;`,
        description: "mean([0, 0]) should return 0",
      },
      {
        testCase: `const outcome = mean([1, 3]);\nreturn outcome === 2;`,
        description: "mean([1, 3]) should return 2",
      },
      {
        testCase: `const outcome = mean([0, 6]);\nreturn outcome === 3;`,
        description: "mean([0, 6]) should return 3",
      },
      {
        testCase: `const outcome = mean([4, 2, 8, 6]);\nreturn outcome === 5;`,
        description: "mean([4, 2, 8, 6]) should return 5",
      },
      {
        testCase: `const outcome = mean([0, 1, 2, 3, 4]);\nreturn outcome === 2;`,
        description: "mean([0, 1, 2, 3, 4]) should return 2",
      },
      {
        testCase: `const outcome = mean([-4, -2, -8, -6]);\nreturn outcome === -5;`,
        description: "mean([-4, -2, -8, -6]) should return -5",
      },
      {
        testCase: `const outcome = mean([0, -1, -2, -3, -4]);\nreturn outcome === -2;`,
        description: "mean([0, -1, -2, -3, -4]) should return -2",
      },
      {
        testCase: `const outcome = mean([0, 0, 0]);\nreturn outcome === 0;`,
        description: "mean([0, 0, 0]) should return 0",
      },
      {
        testCase: `const outcome = mean([1, 1, 1, 1]);\nreturn outcome === 1;`,
        description: "mean([1, 1, 1, 1]) should return 1",
      },
      {
        testCase: `const outcome = mean([-2, -2, -2, -2, -2]);\nreturn outcome === -2;`,
        description: "mean([-2, -2, -2, -2, -2]) should return -2",
      },
      {
        testCase: `const outcome = mean([0, -1, -2, -3]);\nreturn Math.abs(outcome + 1.5) < 1e-10;`,
        description: "mean([0, -1, -2, -3]) should be close to -1.5",
      },
      {
        testCase: `const outcome = mean([1, 2, 2]);\nreturn Math.abs(outcome - 1.6666666666666667) < 1e-10;`,
        description: "mean([1, 2, 2]) should be close to 1.6666666666666667",
      },
      {
        testCase: `const outcome = mean([1, 3, 5, 4, 2, 2, 6, 2]);\nreturn Math.abs(outcome - 3.125) < 1e-10;`,
        description: "mean([1, 3, 5, 4, 2, 2, 6, 2]) should be close to 3.125",
      },
      {
        testCase: `const outcome = mean([-1.3, -2, 3]);\nreturn Math.abs(outcome + 0.1) < 1e-10;`,
        description: "mean([-1.3, -2, 3]) should be close to -0.1",
      },
      {
        testCase: `const outcome = mean([-1, 2, 0.2]);\nreturn Math.abs(outcome - 0.4) < 1e-10;`,
        description: "mean([-1, 2, 0.2]) should be close to 0.4",
      },
      {
        testCase: `const outcome = mean([1, -2, -2]);\nreturn Math.abs(outcome + 1) < 1e-10;`,
        description: "mean([1, -2, -2]) should be close to -1",
      },
    ],
  },
  {
    title: "Flatten",
    slug: "flatten",
    description:
      "Write a function *flatten* that returns a newly-created array with all sub-array elements concactenated recursively into a single level.",
    example:
      "const arr = [1, [2, 3], [4, [5, 6, [7, 8, 9]]], 10];\nflatten(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
    language: "javaScript",
    difficulty: "Easy",
    topic: "",
    initial_code:
      "// please dont change the function declaration\nfunction flatten(array) {\n  // your code here\n}",
    tests: [
        {
          testCase: `const arr = [1, [2, 3], [4, [5, 6, [7, 8, 9]]], 10];\nconst outcome = flatten(arr);\nreturn outcome.length === 10 && outcome.every((val, index) => val === index + 1);`,
          description: "flatten([1, [2, 3], [4, [5, 6, [7, 8, 9]]], 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        },
        {
          testCase: `const arr = []; \nconst outcome = flatten(arr);\nreturn outcome.length === 0;`,
          description: "flatten([]) should return an empty array []",
        },
        {
          testCase: `const arr = [1, 2, 3];\nconst outcome = flatten(arr);\nreturn outcome.length === 3 && outcome[0] === 1 && outcome[1] === 2 && outcome[2] === 3;`,
          description: "flatten([1, 2, 3]) should return [1, 2, 3] (no nested arrays)",
        },
        {
          testCase: `const arr = [[1, 2], [3, 4], [5, 6]];\nconst outcome = flatten(arr);\nreturn outcome.length === 6 && outcome.every((val, index) => val === index + 1);`,
          description: "flatten([[1, 2], [3, 4], [5, 6]]) should return [1, 2, 3, 4, 5, 6]",
        },
        {
          testCase: `const arr = [1, [2, [3, [4, [5]]]]];\nconst outcome = flatten(arr);\nreturn outcome.length === 5 && outcome.every((val, index) => val === index + 1);`,
          description: "flatten([1, [2, [3, [4, [5]]]]]) should return [1, 2, 3, 4, 5] (deeply nested array)",
        },
        {
          testCase: `const arr = [[], [[], []], [[], [[], []]]];\nconst outcome = flatten(arr);\nreturn outcome.length === 0;`,
          description: "flatten([[], [[], []], [[], [[], []]]]) should return an empty array [] (all empty nested arrays)",
        },
        {
          testCase: `const arr = [[1], 2, [3, [4]], 5];\nconst outcome = flatten(arr);\nreturn outcome.length === 5 && outcome.every((val, index) => val === index + 1);`,
          description: "flatten([[1], 2, [3, [4]], 5]) should return [1, 2, 3, 4, 5]",
        },
        {
          testCase: `const arr = [1, [[[[2, 3], 4], 5], 6], 7];\nconst outcome = flatten(arr);\nreturn outcome.length === 7 && outcome.every((val, index) => val === index + 1);`,
          description: "flatten([1, [[[[2, 3], 4], 5], 6], 7]) should return [1, 2, 3, 4, 5, 6, 7]",
        },
        {
          testCase: `const arr = [7, [[[[6, 5], 4], 3], 2], 1];\nconst outcome = flatten(arr);\nreturn outcome.length === 7 && outcome.every((val, index) => val === 7 - index);`,
          description: "flatten([7, [[[[6, 5], 4], 3], 2], 1]) should return [7, 6, 5, 4, 3, 2, 1]",
        },
      ]
      
  },
  {
    title: "Multiples of 3 or 5",
    slug: "multiples-of-3-or-5",
    description:
      "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\nFinish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in. \n**Note:** If the number is a multiple of **both** 3 and 5, only count it *once*.",
    example:
      "function(20) should return 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)",
    language: "javaScript",
    difficulty: "Easy",
    topic: "",
    initial_code:
      "// please dont change the function declaration\nfunction sumOfMultiples(number) {\n  // Your code here\n}",
      tests: [
        {
          testCase: `const outcome = sumOfMultiples(10);\nreturn outcome === 23;`,
          description: "sumOfMultiples(10) should return 23 (3 + 5 + 6 + 9)",
        },
        {
          testCase: `const outcome = sumOfMultiples(20);\nreturn outcome === 78;`,
          description: "sumOfMultiples(20) should return 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)",
        },
        {
          testCase: `const outcome = sumOfMultiples(0);\nreturn outcome === 0;`,
          description: "sumOfMultiples(0) should return 0 (no multiples below 0)",
        },
        {
          testCase: `const outcome = sumOfMultiples(1);\nreturn outcome === 0;`,
          description: "sumOfMultiples(1) should return 0 (no multiples below 1)",
        },
        {
          testCase: `const outcome = sumOfMultiples(5);\nreturn outcome === 3;`,
          description: "sumOfMultiples(5) should return 3 (3)",
        },
        {
          testCase: `const outcome = sumOfMultiples(15);\nreturn outcome === 45;`,
          description: "sumOfMultiples(15) should return 45 (3 + 5 + 6 + 9 + 10 + 12)",
        },
        {
          testCase: `const outcome = sumOfMultiples(30);\nreturn outcome === 195;`,
          description: "sumOfMultiples(30) should return 195 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 + 21 + 24 + 25 + 27)",
        },
        {
          testCase: `const outcome = sumOfMultiples(50);\nreturn outcome === 543;`,
          description: "sumOfMultiples(50) should return 543 (sum of all multiples of 3 or 5 below 50)",
        },
        {
          testCase: `const outcome = sumOfMultiples(100);\nreturn outcome === 2318;`,
          description: "sumOfMultiples(100) should return 2318 (sum of all multiples of 3 or 5 below 100)",
        },
      ]
      ,
  },
  {
    title: "Digital Root",
    slug: "digital-root",
    description:
      "digital root is the _recursive sum of all the digits in a number._\n\nGiven `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.",
    example:
      "16  -->  1 + 6 = 7\n   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6\n132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6\n493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2\n```\n",
    language: "javaScript",
    difficulty: "Medium",
    topic: "",
    initial_code:
      "//please dont change the function declaration\nfunction digitalRoot(n) {\n  // Your code here\n}",
    tests: [
      {
        testCase: `const outcome = digitalRoot(16);\nreturn outcome === 7;`,
        description: "digitalRoot(16) should return 7 (1 + 6 = 7)",
      },
      {
        testCase: `const outcome = digitalRoot(942);\nreturn outcome === 6;`,
        description:
          "digitalRoot(942) should return 6 (9 + 4 + 2 = 15, 1 + 5 = 6)",
      },
      {
        testCase: `const outcome = digitalRoot(132189);\nreturn outcome === 6;`,
        description:
          "digitalRoot(132189) should return 6 (1 + 3 + 2 + 1 + 8 + 9 = 24, 2 + 4 = 6)",
      },
      {
        testCase: `const outcome = digitalRoot(493193);\nreturn outcome === 2;`,
        description:
          "digitalRoot(493193) should return 2 (4 + 9 + 3 + 1 + 9 + 3 = 29, 2 + 9 = 11, 1 + 1 = 2)",
      },
      {
        testCase: `const outcome = digitalRoot(0);\nreturn outcome === 0;`,
        description:
          "digitalRoot(0) should return 0 (0 is a single-digit number)",
      },
      {
        testCase: `const outcome = digitalRoot(9);\nreturn outcome === 9;`,
        description:
          "digitalRoot(9) should return 9 (9 is a single-digit number)",
      },
      {
        testCase: `const outcome = digitalRoot(11);\nreturn outcome === 2;`,
        description: "digitalRoot(11) should return 2 (1 + 1 = 2)",
      },
      {
        testCase: `const outcome = digitalRoot(9999);\nreturn outcome === 9;`,
        description:
          "digitalRoot(9999) should return 9 (9 + 9 + 9 + 9 = 36, 3 + 6 = 9)",
      },
    ],
  },
  {
    title: "Create Stack",
    slug: "create-stack",
    description:
      "implement a data structure in javascript that contains the following operations.\n - push(value) // add an element to the top of the stack\n - pop() // remove and return the element from the top of the stack\n - peek() // return the element from the top of the stack\n - isEmpty() // return true if the stack is empty\n\nThe stack should be a class with methods `push`, `pop`, `peek` and `isEmpty`",
    example:
      "const stack = new Stack(); \nstack.push(1); \nstack.push(2); \nstack.push(3); \nstack.peek(); // 3\nstack.pop(); //3\nstack.peek(); // 2\n stack.isEmpty(); // false",
    language: "javaScript",
    difficulty: "Medium",
    topic: "",
    initial_code:
      "class Stack {\n  constructor() {\n    // Initialize the stack\n  }\n\n  push(value) {\n    // Add value to the stack\n  }\n\n  pop() {\n    // Remove and return the top value from the stack\n  }\n\n  isEmpty() {\n    // Return true if the stack is empty, otherwise false\n  }\n\n  length() {\n    // Return the number of elements in the stack\n  }\n\n  peek() {\n    // Return the top value of the stack without removing it\n  }\n}",
    tests: [
{
  testCase: `
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const peekResult = stack.peek();
    const popResult = stack.pop();
    return peekResult === 3 && popResult === 3 && stack.peek() === 2;
  `,
  description: "Basic operations: push, peek, and pop should work correctly. After pushing 1, 2, and 3, peek should return 3, pop should return 3, and subsequent peek should return 2."
},
{
  testCase: `
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    return stack.isEmpty();
  `,
  description: "After pushing 1, 2, and 3, and popping all elements, isEmpty should return true."
},
{
  testCase: `
    const stack = new Stack();
    return stack.pop() === undefined;
  `,
  description: "Popping from an empty stack should return undefined."
},
{
  testCase: `
    const stack = new Stack();
    return stack.peek() === undefined;
  `,
  description: "Peeking into an empty stack should return undefined."
},
{
  testCase: `
    const stack = new Stack();
    stack.push(42);
    return !stack.isEmpty() && stack.peek() === 42;
  `,
  description: "After pushing an element, isEmpty should return false and peek should return the pushed element."
},
{
  testCase: `
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    const firstPop = stack.pop();
    const secondPop = stack.pop();
    return firstPop === 20 && secondPop === 10 && stack.isEmpty();
  `,
  description: "After pushing 10 and 20, popping twice should return 20 and 10, and the stack should be empty."
},
{
  testCase: `
    const stack = new Stack();
    stack.push(5);
    stack.pop();
    stack.push(10);
    stack.pop();
    return stack.isEmpty();
  `,
  description: "Repeated push and pop should leave the stack empty."
},
{
  testCase: `
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    return stack.pop() === 3 && stack.pop() === 2 && stack.pop() === 1 && stack.isEmpty();
  `,
  description: "Pushing 1, 2, 3 and then popping all should return them in reverse order, leaving the stack empty."
}
    ],
  },
  {
    title: "Snail",
    slug: "snail",
    description:
      "Snail Sort\n\nGiven an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.\n\n```\n",
    example:
      "array = [[1,2,3],\n         [4,5,6],\n         [7,8,9]]\nsnail(array) #=> [1,2,3,6,9,8,7,4,5]\n```\n\nFor better understanding, please follow the numbers of the next array consecutively:\n\n```\narray = [[1,2,3],\n         [8,9,4],\n         [7,6,5]]\nsnail(array) #=> [1,2,3,4,5,6,7,8,9]\n```",
    language: "javaScript",
    difficulty: "Medium",
    topic: "",
    initial_code:
      "// please dont change the function declaration\nfunction snail(array) {\n  // your code here\n}",
    tests: [
      {
        testCase: `const array = [[1,2,3], [4,5,6], [7,8,9]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 9 && outcome.every((val, index) => val === [1,2,3,6,9,8,7,4,5][index]);`,
        description: "snail([[1,2,3], [4,5,6], [7,8,9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5]",
      },
      {
        testCase: `const array = [[1,2,3], [8,9,4], [7,6,5]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 9 && outcome.every((val, index) => val === [1,2,3,4,5,6,7,8,9][index]);`,
        description: "snail([[1,2,3], [8,9,4], [7,6,5]]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]",
      },
      {
        testCase: `const array = [[1]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 1 && outcome[0] === 1;`,
        description: "snail([[1]]) should return [1] (1x1 array)",
      },
      {
        testCase: `const array = [[1, 2], [4, 3]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 4 && outcome.every((val, index) => val === [1,2,3,4][index]);`,
        description: "snail([[1, 2], [4, 3]]) should return [1, 2, 3, 4] (2x2 array)",
      },
      {
        testCase: `const array = [[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 16 && outcome.every((val, index) => val === [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16][index]);`,
        description: "snail([[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] (4x4 array)",
      },
      {
        testCase: `const array = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 25 && outcome.every((val, index) => val === [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25][index]);`,
        description: "snail([[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] (5x5 array)",
      },
      {
        testCase: `const array = [[]];\nconst outcome = snail(array);\nreturn Array.isArray(outcome) && outcome.length === 0;`,
        description: "snail([[]]) should return an empty array [] (empty input)",
      },
    ]
    
  },
  {
    title: "Pallindrome Counter",
    slug: "pallindrome-counter",
    description:
      "Background\n\nPalindromes are a special type of number (in this case a non-negative integer) that reads the same backwards as forwards. A number defined this way is called __palindromic__. \n\n* The following numbers are palindromes: `0`, `252`, `769967`, `1111111`. \n\n* The following numbers are __not__ palindromes: `123`, `689`, `565656`, `12345432`. \n\n# Problem Description\n\nIn this kata, you are required to build a function that receives two arguments, `a` and `b`, and returns the number of integer palindromes between `a` and `b` inclusive.",
    example:
      " If `a` is `6` and `b` is `11`, the function should output `5` because there are 5 palindromes between 6 and 11 inclusive: `6`, `7`, `8`, `9` and `11`. \n\ncounter(6, 11) // 5\n\n* If `a` is `150` and `b` is `250`, the function should output `10` because there are 10 palindromes between 150 and 250 inclusive: `151`, `161`, `171`, `181`, `191`, `202`, `212`, `222`, `232` and `242`.\n\ncounter(150, 250) // 10",
    language: "javaScript",
    difficulty: "Hard",
    topic: "",
    initial_code:
      "// please dont change the function declaration\nfunction counter(a, b) {\n  // your code here\n}",
      tests: [
        {
          testCase: `const outcome = counter(6, 11);\nreturn outcome === 5;`,
          description: "counter(6, 11) should return 5",
        },
        {
          testCase: `const outcome = counter(4, 110);\nreturn outcome === 16;`,
          description: "counter(4, 110) should return 16",
        },
        {
          testCase: `const outcome = counter(100, 500);\nreturn outcome === 40;`,
          description: "counter(100, 500) should return 40",
        },
        {
          testCase: `const outcome = counter(1002, 2001);\nreturn outcome === 9;`,
          description: "counter(1002, 2001) should return 9",
        },
        {
          testCase: `const outcome = counter(1984, 2024);\nreturn outcome === 2;`,
          description: "counter(1984, 2024) should return 2",
        },
        {
          testCase: `const outcome = counter(9999, 1000000);\nreturn outcome === 1801;`,
          description: "counter(9999, 1000000) should return 1801",
        },
        {
          testCase: `const outcome = counter(57, 75);\nreturn outcome === 1;`,
          description: "counter(57, 75) should return 1",
        },
        {
          testCase: `const outcome = counter(1003, 1093);\nreturn outcome === 0;`,
          description: "counter(1003, 1093) should return 0",
        },
        {
          testCase: `const outcome = counter(5698, 8965);\nreturn outcome === 32;`,
          description: "counter(5698, 8965) should return 32",
        },
      ]
      
  },
  {
    title: "Bake Cakes",
    slug: "bake-cakes",
    description:
      "You like to bake cakes. You have some recipes and ingredients. Write a function to quickly find out, if you have enough ingredients to bake a cake and how many of them.\n\nWrite a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes you can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.",
    example:
      "cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); // must return 2\ncakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); // must return 0\n",
    language: "javaScript",
    difficulty: "Hard",
    topic: "",
    initial_code:
      "//please dont change the function declaration\nfunction cakes(recipe, available) {\n  // Your code here\n}",
      tests: [
        {
          testCase: `const recipe = {flour: 200, sugar: 120, eggs: 5};\nconst available = {flour: 300, sugar: 150, eggs: 1};\nconst outcome = cakes(recipe, available);\nreturn outcome === 0;`,
          description: "cakes({flour: 200, sugar: 120, eggs: 5}, {flour: 300, sugar: 150, eggs: 1}) should return 0",
        },
        {
          testCase: `const recipe = {butter: 200, bananas: 2, eggs: 1, flour: 300, sugar: 200};\nconst available = {butter: 500, flour: 2000, sugar: 1500, milk: 1000, bananas: 6, eggs: 5, apples: 3};\nconst outcome = cakes(recipe, available);\n return outcome === 2;`,
          description: " cakes({butter: 200, bananas: 2, eggs: 1, flour: 300, sugar: 200}, {butter: 500, flour: 2000, sugar: 1500, milk: 1000, bananas: 6, eggs: 5, apples: 3}) should return 2",
        },
        {
          testCase: `const recipe = {butter: 200, bananas: 2, eggs: 1, flour: 300, sugar: 200};\nconst available = {butter: 500, flour: 2000, sugar: 1500, milk: 1000, bananas: 2, eggs: 5, apples: 3};\nconst outcome = cakes(recipe, available);\n return outcome === 1;`,
          description: "cakes({butter: 200, bananas: 2, eggs: 1, flour: 300, sugar: 200}, {butter: 500, flour: 2000, sugar: 1500, milk: 1000, bananas: 2, eggs: 5, apples: 3}) should return 1",
        },
        {
          testCase: `const recipe = {carrots: 3, sultanas: 100, flour: 265, eggs: 4, walnuts: 100};\nconst available = {carrots: 14, sultanas: 500, pecans: 500, eggs: 24, flour: 1200, walnuts: 1000, yogurt: 1000};\nconst outcome = cakes(recipe, available);\n return outcome === 4;`,
          description: "cakes({carrots: 3, sultanas: 100, flour: 265, eggs: 4, walnuts: 100}, {carrots: 14, sultanas: 500, pecans: 500, eggs: 24, flour: 1200, walnuts: 1000, yogurt: 1000}) should return 4",
        },
        {
          testCase: `const recipe = {flour: 250, sugar: 100, eggs: 3};\nconst available = {flour: 1000, sugar: 500, eggs: 10};\nconst outcome = cakes(recipe, available);\nreturn outcome === 3;`,
          description: "cakes({flour: 250, sugar: 100, eggs: 3}, {flour: 1000, sugar: 500, eggs: 10}) should return 3",
        },
        {
          testCase: `const recipe = {apples: 4, cinnamon: 1, sugar: 100};\nconst available = {apples: 4, cinnamon: 1, flour: 500};\nconst outcome = cakes(recipe, available);\nreturn outcome === 0;`,
          description: "cakes({apples: 4, cinnamon: 1, sugar: 100}, {apples: 4, cinnamon: 1, flour: 500}) should return 0 (missing sugar)",
        },
        {
          testCase: `const recipe = {chocolate: 200, cream: 100};\nconst available = {chocolate: 400, cream: 300, sugar: 150};\nconst outcome = cakes(recipe, available);\nreturn outcome === 2;`,
          description: "cakes({chocolate: 200, cream: 100}, {chocolate: 400, cream: 300, sugar: 150}) should return 2",
        },
        {
          testCase: `const recipe = {flour: 300, sugar: 150, eggs: 2};\nconst available = {flour: 1500, sugar: 600};\nconst outcome = cakes(recipe, available);\nreturn outcome === 0;`,
          description: "cakes({flour: 300, sugar: 150, eggs: 2}, {flour: 1500, sugar: 600}) should return 0 (missing eggs)",
        },
        {
          testCase: `const recipe = {butter: 100, chocolate: 200, flour: 100};\nconst available = {butter: 500, chocolate: 800, flour: 400};\nconst outcome = cakes(recipe, available);\nreturn outcome === 4;`,
          description: "cakes({butter: 100, chocolate: 200, flour: 100}, {butter: 500, chocolate: 800, flour: 400}) should return 4",
        }

      ]
      
  },
];


export default katasData;
