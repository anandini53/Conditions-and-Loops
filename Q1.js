// Q1. What are conditional statements? Explain conditional statements with syntax and examples.

// Answer:

/** Conditional statements allow a program to make decision based on certain conditions. Basically they are used to perform different action based on different conditions using boolean values. They check whether a specific condition is true or false and then execute code accordingly.

Conditional statements includes :

* if Statement : Use 'if' to specify a code block to be executed, if a specified condition is true.

    Syntax:     if (condition) {
                    // code to execute if the condition is true.
                }

* if-else Statement : Use 'else' to specify a code block to be executed, if the same condition is false.

    Syntax:     if (condition) {
                    // code to execute if the condition is true
                }   else {
                    // code to execute if the condition is false 
                }   

* if-else-if Ladder : Use 'else-if' to specify multiple conditions to text, if the first condition is false.

    Syntax:     if (condition1) {
                    // code to execute if the condition1 is true
                }   else if (condition2) {
                    // code to execute if the condition1 is false and condition2 is true
                }   else {
                    // code to execute if the condition1 and condition2 both are false
                }

* Switch Statement : The switch statement is a control structure in JavaScript that allows you to execute different blocks of code based on the value of a single expression. It’s a cleaner, more readable alternative to multiple if...else if statements when you need to compare one variable against many possible values.

    Syntax:     switch(expression) {
                    case x:
                        // code block
                        break;
                    case y:
                        // code block
                        break;
                    default:
                        // code block
                    }
    */
// Examples :

let marks =  80;
let subject = "Science";

// 1. if

if (marks > 100 || marks < 0) {
    console.log("Invalid marks");
}

// 2. if..else

if (marks >= 33) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

// 3. if-else if

if (marks >= 85) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// 4. Switch

switch (subject) {
    case "Math":
        console.log("Math paper checked");
        break;
    case "Science":
        console.log("Science paper checked");
        break;
    case "Hindi":
        console.log("Hindi paper checked");
        break;
    default :
    console.log("other papers");
}