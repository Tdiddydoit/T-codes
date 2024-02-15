
// This function will let us play the dice game
function PlayCraps(){
    // narrate what the function does through the console
    console.log("PlayCraps function is called")
    
    // role a die
    var die = Rolldie();
    console.log("First die roll is " + die);

    // role a die
    var die2 = Rolldie();
    console.log(" Second die roll is " + die2);

    // Add die together
    var sum= die + die2
    console.log("sum of dice rolls is " + sum);

    // output the dice rolls to html page
    document.getElementById("die 1 result").innerHTML = "Die 1 is: " + die;
    document.getElementById("die 2 result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("Sum result").innerHTML = " The sum is: " + sum;

    /* Code in rules
     If sum is 11 or 7 we lose
     || mean or (shift above enter key)
     == checks if values are the same */
    if (sum == 7 || sum == 11){
        document.getElementById("Craps result").innerHTML = " You lose ";
    }
    // IF Code does not happen, what happens?
    // code checks if dice are the same then we check the remanduer us 0 when divided by 2
    // overall code checks for even number
    else if(die == die2 && die % 2 == 0){
    document.getElementById("Craps result").innerHTML = "You Win!";
    }
    // If neither if and else if code happens this happens no matter what 
    else{
     document.getElementById("Craps result").innerHTML = " You Tied ";
    }
}
// Generates random number to simulate die numbers 1-6
function Rolldie(){
    // Generates random nuber
    // Math, gives number between 0 and 1
var die = Math.random() * 6;
// Make sure number is raounded
return Math.ceil(die);
}
function Grover(){
    var fname = document.getElementById("fname").value;               
    var lname = document.getElementById("lname").value;
    var zipcode = document.getElementById("zipcode").value;

    console.log("First name" + fname);
    console.log("Last name" + lname);
    console.log("Zipcode" + zipcode);
    
    var Fullname = fname + "" +lname;
    console.log("Fullname" + Fullname);

    // checks name length  if invalid code will reject
    if(Fullname.length > 20 || Fullname.length == 1){
        console.log("Invalid name")
        alert("Enter name shorter than 20 Letters")
        return false;
    }
    else if (zipcode.length !=5){
   console.log("Invalid zip code")
   return false;
}
   else{
    console.log("We are good to go ")
    alert("Welcome. " + Fullname + ". The secret word is pancakes");
    return true;
   }
    
}