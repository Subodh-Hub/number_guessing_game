let minNumber=50;
let maxNumber=100;
let answer=Math.floor(Math.random()*(maxNumber-minNumber))+minNumber;
let attempts=0;
console.log(answer);
let running=true
while(running)
{
    let guess = Number(window.prompt(`Enter your guess between ${minNumber} and ${maxNumber}?`));

    if(isNaN(guess))
    {
        window.alert("Please enter the valid number");
    }
    else if(guess<minNumber||guess>maxNumber)
    {
        window.alert(`Invalid Number!!! please enter the number between ${minNumber} and ${maxNumber}.`);
    }

    else{
        attempts++;
        if(guess>answer){
            window.alert("Your guess is too high");
        }
        else if(guess<answer)
        {
            window.alert("your guess is low");
        }
        else{
            window.alert(`You've got the  correct guess in attempts:${attempts}`);
            window.alert(`Answer was: ${answer}`);
            running=false;
        }
    }
}