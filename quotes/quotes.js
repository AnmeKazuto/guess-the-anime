

let imageContainer = document.getElementsByClassName("charimage");
let image = document.getElementById("charimage");
let Quote = document.getElementById("quote");
let charinput = document.getElementById("charinput");
let guesslives = document.getElementById("lives");
let DailyQuote = [
    {
        daily: 0 ,
        quote:"Anyone who tries to hurt my friends...is gonna pay!",
        characterimg:"/resources/goku-dragon-ball.jpg" ,
        answer:"goku"
    },
    {
        daily:1,
        quote:"The first game, second game, the playoffs, the nationals... I'm going to win them all.",
        characterimg:"/resources/kageyama-kaikyuu.pdf",
        answer: "kageyama"     
    },

]
/* makes everything work*/
let day = 0;
let lives = 3;
guesslives.innerHTML = lives;
let answer = DailyQuote[day].answer;
let dailyQ = DailyQuote[day].quote;
let dailyI = DailyQuote[day].characterimg;    

/* functions for when the answer is right */
function correct(){

    let RightAnswer = "That answer is correct!Try previous days!"
    guesslives.innerHTML = RightAnswer;
    console.log(charinput.value);
    console.log(lives);
}
/* functions for showing the image */

function ShowImg(){
    
    image.src = DailyQuote[day].characterimg;
    image.style.display = "inline-block";
    
}



function Charguess(){
//char input doesnt work not getting value from input
    if(charinput.value == answer){
        
        correct();
        ShowImg();
    }
    
    if(charinput.value != answer){
        lives -= 1;
        guesslives.innerHTML = lives;
        console.log(lives);
        console.log(charinput.value)

    }
    
    
    
    if(lives <= 0){
        
        let newlives = `Game Over! The Answer Is ${answer}`
        guesslives.innerHTML = newlives;
        ShowImg();
        
    }
    
}

// function for setting the daily quote image and answer
function Daily(){
    //quote
    Quote.innerHTML = dailyQ; 
    //image (image not showing)
    image.src = dailyI;


    


}

Daily();

function PreviousDays(){
    for ( i in DailyQuote){
        console.log(i);
        document.createElement("button")
    }

}
PreviousDays()