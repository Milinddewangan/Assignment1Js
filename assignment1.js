// ===============================
// Q1: Simple Calculator
// ===============================

// Two numbers for calculation
let num1 = 10;
let num2 = 5;

// Performing different operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);


// ===============================
// Q2: Personal Info Object
// ===============================

// Creating an object with personal info
let person = {
    name: "John Doe",
    age: 25,
    city: "New York"
};

// Printing using dot notation
console.log("Name (dot):", person.name);
console.log("Age (dot):", person.age);
console.log("City (dot):", person.city);

// Printing using bracket notation
console.log("Name (bracket):", person["name"]);
console.log("Age (bracket):", person["age"]);
console.log("City (bracket):", person["city"]);


// ===============================
// Q3: Area of a Rectangle
// ===============================

// Rectangle dimensions
let length = 8;
let width = 4;

// Calculating area
let area = length * width;
console.log("Area of Rectangle:", area);


// ===============================
// Q4: Odd or Even Checker
// ===============================

// Number to check
let checkNumber = 7;

// Using % operator to check odd/even
if (checkNumber % 2 === 0) {
    console.log(checkNumber, "is Even");
} else {
    console.log(checkNumber, "is Odd");
}


// ===============================
// Q5: Student Marks
// ===============================

// Student object with marks
let student = {
    name: "Alice",
    mathMarks: 85,
    scienceMarks: 90
};

// Calculating total and average
let totalMarks = student.mathMarks + student.scienceMarks;
let averageMarks = totalMarks / 2;

// Printing results
console.log("Student Name:", student.name);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
