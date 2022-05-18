console.log("script");
let userDB="admin@admin.com";



let userName=prompt("Enter your name");

const URL="http://myserver.com/myendpoint";

if(userName==userDB){

document.write(`<h3>Welcome ${userName.toUpperCase()}</h3>
<p> Your name has ${userName.length} letters</p>`);
}

else{
    document.write(
        `<p class="error"> Invalid credentials</p>`
    );
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

