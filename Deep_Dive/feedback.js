// function average(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total / numbers.length;
// }

// var result = average([2, 4, 6, 8, 10]);
// console.log(result);

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number|null} - The average of the numbers or null if the array is empty.
 */
function average(numbers) {
  if (numbers.length === 0) return null;

  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

const averageValue = average([2, 4, 6, 8, 10]);
console.log(averageValue);
////////////////////////////////////////////////////////////////////////////////////////////////////
// function loginUser(username, password) {
//     if (username == "" || password == "") {
//         console.log("Error: Username or password cannot be empty!");
//         return false;
//     }

//     // Mock database check
//     var dbUser = "admin";
//     var dbPass = "12345";

//     if (username == dbUser && password == dbPass) {
//         console.log("Login successful!");
//         return true;
//     } else {
//         console.log("Invalid credentials!");
//         return false;
//     }
// }

// var user = prompt("Enter username:");
// var pass = prompt("Enter password:");
// loginUser(user, pass);
// Mock function to simulate password verification from a database
function isPasswordCorrect(username, hashedPassword) {
  // In a real scenario, fetch the hashed password from the database and compare
  // For this example, we'll use a hardcoded hashed password for "admin"
  const storedHashedPassword = "$2b$10$somehashedvaluehere";
  return bcrypt.compareSync(hashedPassword, storedHashedPassword);
}

function loginUser(username, password) {
  if (!username || !password) {
    alert("Username or password cannot be empty!");
    return false;
  }

  const isCorrect = isPasswordCorrect(username, bcrypt.hashSync(password, 10));
  if (isCorrect) {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid credentials!");
    return false;
  }
}

const user = prompt("Enter username:");
const pass = prompt("Enter password:");
loginUser(user, pass);
