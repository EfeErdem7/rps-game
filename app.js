const rps = document.getElementsByClassName("rps");
const calculating = document.getElementById("calculating")
const winner = document.getElementById("result");
const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");
const userScoreP = document.getElementById("usrscr");
const compScoreP = document.getElementById("compscr");
const restartButton = document.getElementById("stopButton");
const rpsChoices = document.getElementsByClassName("choice");

let userScore = 0;
let computerScore = 0;

let temp = false;
const game = (choice) => {
    if (temp) return;
    document.getElementById("userPick").innerHTML="";
    document.getElementById("compPick").innerHTML="";
    const animations = () => {
        temp = true;
        for (let x = 0; x < rpsChoices.length; x++) {
            rpsChoices[x].classList.remove("choicesCursor")
            rpsChoices[x].classList.add("userSelectNone");
            setTimeout(() => {
                rpsChoices[x].classList.remove("userSelectNone")
                rpsChoices[x].classList.add("choicesCursor")
            }, 2100);
        }
        for (let i = 0; i < rps.length; i++) {
            rps[i].classList.add("fadeInOut");
            calculating.classList.add("calcFadeIn", "animate__fadeInDown");
            setTimeout(() => {
                rps[i].classList.remove("fadeInOut");
            }, 600);

            setTimeout(() => {
                rps[i].classList.add("fadeInOut");
            }, 650);

            setTimeout(() => {
                rps[i].classList.remove("fadeInOut");
            }, 1300);

            setTimeout(() => {
                rps[i].classList.add("fadeInOut");
            }, 1350);

            setTimeout(() => {
                rps[i].classList.remove("fadeInOut");
                temp = false;
                calculating.classList.remove("calcFadeIn", "animate__fadeInDown");
                calculating.classList.add("calcFadeOut", "animate__fadeOutDown");
            }, 2100);

            setTimeout(() => {
                winner.classList.add("fadeIn", "animate__bounceIn")
            }, 2150);

            setTimeout(() => {
                winner.classList.remove("fadeIn", "animate__bounceIn")
                calculating.classList.remove("calcFadeOut", "animate__fadeOutDown");
            }, 3600);

            setTimeout(() => {
                winner.classList.add("fadeOut")
            }, 3600);

            setTimeout(() => {
                winner.classList.remove("fadeOut")
            }, 4600);
        }
    }

    const getComputerChoice = () => {
        const computerOptions = ["r", "p", "s"];
        const computerNumber = Math.floor(Math.random() * 3);
        return computerOptions[computerNumber];
    }
    const computerChoice = getComputerChoice();

    function getPic(userChoice, computerChoice) {
        const userPick = document.getElementById("userPick");
        const compPick = document.getElementById("compPick");
        if (userChoice === "r") {
            userPick.innerHTML = `<img src="images/rock.png" loading="lazy" style="margin-top: 0.5rem; height: 100px; width: 100px;">`
        } else if (userChoice === "p") {
            userPick.innerHTML = `<img src="images/paper.png" loading="lazy" style="margin-top: 0.25rem; height: 100px; width: 100px;">`
        } else {
           userPick.innerHTML = `<img src="images/scissors.png" loading="lazy" style="margin-top: 0.5rem; height: 100px; width: 100px;">`
        }
        setTimeout(() => {
            if (computerChoice === "r") {
                compPick.innerHTML = `<img src="images/rock.png" loading="lazy" style=" margin-top: 0.5rem; height: 100px; width: 100px;">`
            } else if (computerChoice === "p") {
                compPick.innerHTML = `<img src="images/paper.png" loading="lazy" style=" margin-top: 0.25rem; height: 100px; width: 100px;">`
            } else {
                compPick.innerHTML = `<img src="images/scissors.png" loading="lazy" style=" margin-top: 0.5rem; height: 100px; width: 100px;">`
            }
        }, 2100);
    }
    getPic(choice, computerChoice);

    setTimeout(() => {
        const win = () => {
            console.log("you won")
            userScore++;
            userScoreP.innerHTML = userScore;
        }
        const lose = () => {
            console.log("you lost")
            computerScore++;
            compScoreP.innerHTML = computerScore;
        }

        const draw = () => {
            console.log("its a tie")
        }
        const compareHands = (userChoice, computerChoice) => {
            const winner = document.getElementById("result-p");
            if (userChoice === computerChoice) {
                winner.textContent = "It is a tie";
                draw();
                return;
            }
            if (userChoice === "r") {
                if (computerChoice === "s") {
                    winner.textContent = "You win !";
                    win();
                    return;
                } else {
                    winner.textContent = "Computer Wins !"
                    lose();
                    return;
                }
            }
            if (userChoice === "p") {
                if (computerChoice === "s") {
                    winner.textContent = "Computer Wins !"
                    lose();
                    return;
                } else {
                    winner.textContent = "You win !";
                    win();
                    return;
                }
            }
            if (userChoice === "s") {
                if (computerChoice === "r") {
                    winner.textContent = "Computer Wins !"
                    lose();
                    return;
                } else {
                    winner.textContent = "You win !";
                    win();
                    return;
                }
            }
        };

        compareHands(choice, computerChoice);
    }, 2150);

    getComputerChoice();
    animations();
}

restartButton.addEventListener("click", () => {
    document.getElementById("userPick").innerHTML="";
    document.getElementById("compPick").innerHTML="";
    userScoreP.innerHTML = 0;
    compScoreP.innerHTML = 0;
    userScore = 0;
    computerScore = 0;
})




