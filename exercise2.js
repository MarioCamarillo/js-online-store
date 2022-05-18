////////////////////////////////////////////
// Declaration of variables
////////////////////////////////////////////
let userName = prompt("Please enter your name");
let userEmail = prompt("please enter your email: ");
let monthlySalary = prompt("Enter your monthly salary");

////////////////////////////////////////////
// Calculate the yearly salary
////////////////////////////////////////////
let yearlySalary = monthlySalary*12;


////////////////////////////////////////////
// Display on HTML the informqweqweqation
////////////////////////////////////////////
document.write(
    `
    <div class="container">
        <p><span>Name:</span> ${userName} </p>
        <p><span>Email:</span> ${userEmail} </p>
        <p><span>Salary:</span> ${yearlySalary} </p>

    </div>
    `
)
