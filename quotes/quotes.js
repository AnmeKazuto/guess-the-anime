let guesstoggle = document.getElementById("guess");
let daycnt = document.getElementById("daysContainer");
let imageContainer = document.getElementsByClassName("charimage");
let image = document.getElementById("charimage");
let Quotetag = document.getElementById("quote");
let charinput = document.getElementById("charinput");
let guesslives = document.getElementById("lives");
let prevbtn = document.getElementById("prevbtn");

let DailyQuote = [
    {
        daily: 0,
        quote: "Anyone who tries to hurt my friends...is gonna pay!",
        characterimg: "/resources/goku-dragon-ball.jpg",
        answer: "goku"
    },
    {
        daily: 1,
        quote: "The first game, second game, the playoffs, the nationals... I'm going to win them all.",
        characterimg: "/resources/Haikyuu-Kageyama-Karasuno-.avif",
        answer: "kageyama"
    }
];

let day = 0;
let lives = 3;

function updateUI() {
    guesslives.innerHTML = lives;
    Quotetag.innerHTML = DailyQuote[day].quote;
    image.src = DailyQuote[day].characterimg;
    image.style.display = "none"; // Hide image until correct answer is given
}

function correct() {
    guesslives.innerHTML = "That answer is correct! Try previous days!";
    ShowImg();
}

function ShowImg() {
    image.style.display = "inline-block";
}

function Charguess() {
    let userAnswer = charinput.value.trim().toLowerCase();
    if (userAnswer === DailyQuote[day].answer) {
        correct();
    } else {
        lives -= 1;
        guesslives.innerHTML = lives;

        if (lives <= 0) {
            guesslives.innerHTML = `Game Over! The Answer Is ${DailyQuote[day].answer}`;
            ShowImg();
        }
    }
}

// Function for setting the daily quote, image, and answer
function Daily() {
    day = 0;
    lives = 3;
    updateUI();
}

Daily();

prevbtn.addEventListener("click", PreviousDays);

function PreviousDays() {
    daycnt.innerHTML = ""; // Clear previous buttons
    daycnt.style.display = "grid";

    DailyQuote.forEach((quote, index) => {
        let button = document.createElement("button");
        button.innerHTML = `Day ${index}`;
        button.value = index;
        button.addEventListener("click", () => changeDays(index));
        daycnt.appendChild(button);
    });

    daycnt.style.background = "blue";
    guesstoggle.style.display = "none";
}

function changeDays(selectedDay) {
    day = selectedDay;
    lives = 3;

    updateUI();
    daycnt.style.display = "none";
    guesstoggle.style.display = "inline-block";
}
