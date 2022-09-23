
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const label = document.getElementById("label");
const restart = document.getElementById("restartBtn");

// //Guess The Number 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


  let randomNum = getRandomInt(100);
  let attempts = 1
  console.log(randomNum);


const submit = () =>{
    if(userInput.value  !== ""){
         let userAsk = Number.parseInt(userInput.value);
        repeat(userAsk);
        return;
    }
    else{
        label.innerText = "User Input will not be Empty "

    }
}
const repeat = (userAsk) => {
// console.log( "a" + userAsk)
  if (userAsk >= 100) {
    label.innerText =  "Sorry you have to entered only 1 to 100 " + " \nPlease try agian"
    attempts++
  }

  if (randomNum == userAsk) {
     label.innerText = "Your Entered Number " + userAsk +  "\nYAY ! Your Guess Is Right " + " \nyou guessed the right number in " + attempts + " attempts" + "\nYour score is " + parseInt(100 - (attempts - 1))

     document.getElementById("restartBtn").style.display = "block"

  }
  else if (randomNum > userAsk) {
     label.innerText = "Your Entered Number " + userAsk +  "\nNumber is greater than your number"
    attempts++
  }
  else if (randomNum < userAsk) {
     label.innerText = "Your Entered Number " + userAsk +  "\nNumber is less than your number"
    attempts++
  }

  else {
     label.innerText = "Your Entered Number " + userAsk +  "\nSorry Your Number Is Not Match"
    attempts++
  
  }
  userInput.value  = ""
}
const restartF = () =>{
  label.innerText = ""
  userInput.value = ""
  restart.style.display = "none"
  randomNum = getRandomInt(100);
  attempts = 1
  console.log(randomNum);
}

  

  
