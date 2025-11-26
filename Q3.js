// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.

/** Answer:
  A loop is a programming structure that allows you to repeat a block of code multiple times.
  Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient. */

/** We need loops to :
 
 * Avoid writing the same code repeatedly
 * Perform repeated tasks automatically
 * Work with arrays and objects easily
 * Reduce code length and errors
 */

/** Types of loop :
 
 1. 'for' Loop - The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.
  Syntax: 

    for (initialization; condition; increment/decrement)  {    
     // block of code to execute
  } 
  */

  for (let i = 1; i <= 10; i++) {
    console.log(2 * i); // table of 2
  }

/**
 2. 'while' Loop - The while loop executes as long as the condition is true.It can be thought as a repeating of statement.
  Syntax:

    while (condition) {
          // Block of Code to execute
      }
   */

  let i = 0;
    while (i < 9) {
    console.log(i);
    i++
  }

/**
 3. 'd0-while' Loop - The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
  Syntax:

    do {
      // block of code to execute
    } while (condition);
 */

  let num = 1;
    do {
    console.log(num);
    num += 2;
  } while (num < 10);   // print odd number

