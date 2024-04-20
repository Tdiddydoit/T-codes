
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
//////////////////////////////////////////////////////////
function Grover(){
    var fname = document.getElementById("fname").value;               
    var lname = document.getElementById("lname").value;
    var zipcode = document.getElementById("zipcode").value;

    console.log("First name" + fname);
    console.log("Last name" + lname);
    console.log("Zipcode" + zipcode);
    
    var Fullname = fname + " " +lname;
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
    alert("Welcome " + Fullname + " the secret word is pancakes.");
    return true;
   }
    
}
//////////////////////////////////////////////////////////////////
    // Track interval to stop it
    var Jugo = 0;
    // This fuction will make image move
    function MoveImage(){
        // create varible that will connect to meme image
        var Bear = document.getElementById("memeimage");

        Jugo = setInterval(function(){
            // Varible for to hold new X cord
            var newX = Enderman();
            // Varible for New Y
            var newY = Enderman();

            // Code to change image location
            Bear.style.left = newX + "px";
            Bear.style.top = newY + "px";

            console.log("x: " + Bear.style.left + "top: " + Bear.style.top)
        }, 1200); // The 1000 is time in millisecond making code run every one second
    }
        //Create stop image function
        function StopImage(){
            // call Java to stop image
            clearInterval(Jugo)
        }
        // Creates Ramdom cord
        function Enderman(){
            // Returns random cordiante to code that calls it
            return Math.floor(Math.random()* 1000);
           //################################################### 
        }
        ////////////////////////////////////////////////
        function Eyes(){
            //EyeTest("radar");
            //EyeTest("Fun stuff");

            var flash = true;
            do{
                // promt user to enter word
                var userInput = prompt(" Enter a word to see if it is a palindrome: ");
                var newt = EyeTest(userInput);
                var message = "";
                // if word is ture or false notigy user
                if (newt){
                    message = userInput + " is a palindrome!";
                }
                else{
                    message = userInput + " is not a palindrome!";
                }
                //display mesagge
                alert(message);
                // do you want to continue
                var answer = prompt( "Do you want to continue? (y/n)");
                if (answer == "n"){
                    flash = false;
                }
            }
            while(flash);
            // code will run untill flash is false
        }
        // This funtion will test if word is revisible 
        function EyeTest(strToTest){
            var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

            console.log("strCleaned"+ strCleaned);
            //Put string into array
            var strArray = strCleaned.split("");
            //Reverse letters in the array
            var strReversedArray = strArray.reverse();
            // Put ray back into string 
            var strRev = strReversedArray.join("");
            console.log("strRev" + strRev);
            //ture or false results
            return strRev == strCleaned;
        }
        
/////////////////////////////////////////////////////

        function Sound(){
            // creates audio element
            var soundElem = document.createElement("audio");

            // nickname to play button
            var Playbutton = document.getElementById("Playbtn");

            // nickname to pause button
            var Pausebutton = document.getElementById("Pausebtn");

            // set attibute for sound element
            soundElem.setAttribute("id", "mySound");
            // specifi sound file
            soundElem.setAttribute("src", "Do u know de way.mp4");

            //audio player controls
            soundElem.setAttribute("controls", "controls");

            // add audio element to page
            document.body.appendChild(soundElem);

            console.log("sound added");

            // make play and pause visible
            Playbutton.hidden = false;
            Pausebutton.hidden = false;
        }
        // runs when play is clicked
        function Play(){
          var audio = document.getElementById("mySound");
          audio.play();
          console.log("sound played");
        }
        
        // function runs when pause is clicked
        function Pause(){
            var audio = document.getElementById("mySound");
          audio.pause();
          console.log("sound paused");
        }

        // Array code
            // fuction runs on button click
            function showCons(){
                // an array to hold our consoles
                var ConsolesArr = [
                    "Xbox",
                    "Playstation",
                    "Nintendo 64",
                    "Wii",
                    "Nintendo switch",
                    "DS"
                ];
    
                // pointer to console div
                var consoleDiv = document.getElementById("GameConsoles");
    
                // pointer to the button
                var consoleButton = document.getElementById("Conbtn");
    
                //create unorderd list 
                var ConsoleUl = document.createElement("ul");
    
                // add the unorded list to html via the div
                consoleDiv.appendChild(ConsoleUl);
    
                // loop through pant list array and create list item for each consoles
                // I is counter varible loop will run as long as items in array i increses by 1 every loop
                for(var i=0; i<ConsolesArr.length; i++){
                    // create list
                    var ConsoleLi = document.createElement("Li");
    
                    // add the name of plant to the text of list item
                    ConsoleLi.textContent = ConsolesArr[i];
    
                    //add the list item to the unorderd list
                    ConsoleUl.appendChild(ConsoleLi);
                }
    
                // hide plant button
                consoleButton.remove();
    
            }
    
            function showStats(){
                var GameArr = [
                    "Rainbow six seige",
                    "Apex legends",
                    "Helldivers 2",
                    "Overwatch"
                ];
    
                var PlaytimeArr = [
                    "216 hours",
                    "70 hours",
                    "116 hours",
                    "320 hours"
                ];
    
                    // pointer to console div
                    var VGstat = document.getElementById("VGstats");
    
                    // pointer to the button
                    var statsbutton = document.getElementById("Statbtn");
    
                    //create unorderd list 
                    var StatsUl = document.createElement("ul");
    
                    // add the unorded list to html via the div
                    VGstat.appendChild(StatsUl);
    
                    // loop through stats
                    for(i=0; i<GameArr.length; i++){
    
                    // create list
                    var StatsLi = document.createElement("Li");
    
                    // add the name of plant to the text of list item
                    StatsLi.textContent = GameArr[i] + ": " + PlaytimeArr[i];
    
                    //add the list item to the unorderd list
                    StatsUl.appendChild(StatsLi);
                    }
    
                    //hide button
                    statsbutton.remove();
            }
////////////////////////////////////////////////////////////////////////////
            // Lap recorder
               // this variable will track current lap
        // value will change as more laps are recorded
        var lapcounter = 0;

        //set up array for lap times
        var lapArr = [

        ];

        // function will record lap and add it to ;a[ counter array
        function LapTime(){
            // use push to add item to the end of the array
            // new date will ade current date and time to array
            lapArr.push(new Date());

            //print info to console
            console.log("Lap" + (lapcounter+1) + "recorded" + lapArr[lapcounter]);

            var divmsg = document.getElementById("messageDiv");
            if(lapcounter == 0){
                divmsg.innerText = "The first lap was recorded";
            }
            else if (lapcounter == 1){
                divmsg.innerText = "The second lap was recorded"
            }
            else{
                divmsg.innerText = " Lap: " + (lapcounter+1) + " was recorded";
            }
            // increses lap counter by 1
            lapcounter++;
        }

        function displayLaps(){
            var divlaps = document.getElementById("LapDiv");

            // create unorderd list
            var ulLaps = document.createElement("ul");

            // add list to display laps div
            divlaps.appendChild(ulLaps);

            // loop through the laps array to add the lap times to lis
            for (var i=0; i < lapArr.length; i++){
                var LiLap = document.createElement("li");

                LiLap.textContent = "Lap: " + (i+1) + ": " + lapArr[i];

                // add list item to list
                ulLaps.appendChild(LiLap);
            }
        }
        ///////////////////////////////////////////////////////

        