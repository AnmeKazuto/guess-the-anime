let charinput = document.getElementById("charform").value;
let guesslives = document.getElementById("lives");
let DailyQuote = [
    {daily: 0 ,quote:"Anyone who tries to hurt my friends...is gonna pay!",
        characterimg:"/resources/goku-dragon-ball" ,
        answer:"Goku"}
]
let day = 0;
let lives = 3;
guesslives.innerHTML = lives;
let answer = DailyQuote[day].answer;

function Charguess(){
    
    if(charinput == answer){
        console.log(charinput);
        console.log(lives);
    }
    if(charinput != answer){
        lives -= 1;
        console.log(lives);
    }
    guesslives.innerHTML = lives;
    // code below not working 
    if(lives = 0 ){
        guesslives.innerHTMl = `Game Over! The Answer Is ${answer}`
    }
}
