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
  },
  {
    title: "Multiples of 3 or 5",
    slug: "multiples-of-3-or-5",
    description:
      "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\nFinish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in. \n**Note:** If the number is a multiple of **both** 3 and 5, only count it *once*.",
    example:
      "function(20) should return 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)",
    language: "javaScript",
    difficulty: "Medium",
    topic: "",
    initial_code:
      "/ please dont change the function declaration\nfunction sumOfMultples(number) {\n  // Your code here\n}",
    tests: [
      {
        testCase: `const outcome = solution(10);\nreturn outcome === 23;`,
        description: "solution(10) should return 23 (3 + 5 + 6 + 9)",
      },
      {
        testCase: `const outcome = solution(20);\nreturn outcome === 98;`,
        description:
          "solution(20) should return 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)",
      },
      {
        testCase: `const outcome = solution(0);\nreturn outcome === 0;`,
        description: "solution(0) should return 0 (no multiples below 0)",
      },
      {
        testCase: `const outcome = solution(1);\nreturn outcome === 0;`,
        description: "solution(1) should return 0 (no multiples below 1)",
      },
      {
        testCase: `const outcome = solution(5);\nreturn outcome === 8;`,
        description: "solution(5) should return 8 (3 + 5)",
      },
      {
        testCase: `const outcome = solution(15);\nreturn outcome === 60;`,
        description:
          "solution(15) should return 60 (3 + 5 + 6 + 9 + 10 + 12 + 15)",
      },
      {
        testCase: `const outcome = solution(30);\nreturn outcome === 225;`,
        description:
          "solution(30) should return 225 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 + 21 + 24 + 25 + 27 + 30)",
      },
      {
        testCase: `const outcome = solution(50);\nreturn outcome === 593;`,
        description:
          "solution(50) should return 593 (sum of all multiples of 3 or 5 below 50)",
      },
      {
        testCase: `const outcome = solution(100);\nreturn outcome === 2418;`,
        description:
          "solution(100) should return 2418 (sum of all multiples of 3 or 5 below 100)",
      },
    ],
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
      "implement a data structure in javascript that contains the following operations.\n - push(value)\n - pop()\n - peek()\n - isEmpty()\n\nThe stack should be a class with methods `push`, `pop`, `peek` and `isEmpty`",
    example:
      "const stack = new Stack(); \nstack.push(1); \nstack.push(2); \nstack.push(3); \nstack.peek(); // 3\nstack.pop(); //3\nstack.peek(); // 2\n stack.isEmpty(); // false",
    language: "javaScript",
    difficulty: "Medium",
    topic: "",
    initial_code:
      "class Stack {\n  constructor() {\n    // Initialize the stack\n  }\n\n  push(value) {\n    // Add value to the stack\n  }\n\n  pop() {\n    // Remove and return the top value from the stack\n  }\n\n  isEmpty() {\n    // Return true if the stack is empty, otherwise false\n  }\n\n  length() {\n    // Return the number of elements in the stack\n  }\n\n  peek() {\n    // Return the top value of the stack without removing it\n  }\n}",
    tests: [
      {
        testCase: `const s = new Stack();\nreturn s instanceof Stack;`,
        description:
          "Creating a new Stack instance should return true for instanceof Stack",
      },
      {
        testCase: `const s = new Stack();\nreturn s.push(100) === 1 && s.length() === 1 && s.push(200) === 2 && s.length() === 2;`,
        description:
          "push() should correctly add elements and update the length",
      },
      {
        testCase: `const s = new Stack();\ns.push(100);\nreturn s.length() === 1 && s.pop() === 100 && s.length() === 0 && s.pop() === undefined;`,
        description:
          "pop() should remove elements and handle underflow correctly",
      },
      {
        testCase: `const s = new Stack();\nreturn s.isEmpty() === true && (s.push(100), s.isEmpty() === false) && (s.pop(), s.isEmpty() === true);`,
        description:
          "isEmpty() should correctly identify if the stack is empty",
      },
      {
        testCase: `const s = new Stack();\nreturn s.length() === 0 && (s.push(100), s.length() === 1) && (s.push(200), s.length() === 2) && (s.pop(), s.length() === 1) && (s.push(300), s.length() === 2);`,
        description:
          "length() should correctly track the number of elements in the stack",
      },
      {
        testCase: `const s = new Stack();\nreturn s.peek() === undefined && (s.push(100), s.peek() === 100) && (s.push(200), s.peek() === 200) && (s.pop(), s.peek() === 100) && (s.push(300), s.peek() === 300) && (s.pop(), s.pop(), s.peek() === undefined);`,
        description:
          "peek() should return the top element without removing it and handle empty stack correctly",
      },
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
  },
  {
    title: "Bake Cakes",
    slug: "bake-cakes",
    description:
      "You like to bake cakes. You have some recipes and ingredients. Write a function to quickly find out, if you have enough ingredients to bake a cake and how many of them.\n\nWrite a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes you can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.",
    example:
      "// must return 2\ncakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); \n// must return 0\ncakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});",
    language: "javaScript",
    difficulty: "Hard",
    topic: "",
  },
];

export default katasData;
