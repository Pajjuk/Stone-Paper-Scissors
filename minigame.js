    let pn = "";
    let playerScore=0;
    let computerScore=0;


    function Startgame() {
      const input = document.getElementById("pnameinput").value.trim();
      if (input !== "") {
        pn = input;
        document.getElementById("title").innerText =
          `Welcome, ${pn}! Let's Play the Game`;

        const namec = document.getElementById("pname");
        namec.classList.add("fade-out");

        setTimeout(() => {
          namec.style.display = "none";
          const game = document.getElementById("games");
          game.style.visibility="visible";
          game.classList.add("fade-in");
        }, 600);
      } else {
        alert("Please enter your name to start the game!!");
      }
    }

    function playGame(playerChoice) {
      const choices = ["stone", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let resultText = `${pn}: ${playerChoice} <br> Computer: ${computerChoice} <br>`;
      let congratsText="";

      if (playerChoice === computerChoice) {
        resultText += "<strong>It's a Tie!</strong>";
      } else if (
        (playerChoice === "stone" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "stone")
      ) {
        resultText += "<strong>Computer Wins!</strong>";
        computerScore++;
      } else {
        resultText += `<strong>${pn} wins!</strong>`;
        playerScore++;
    congratsText = `🎉 Congratulations ${pn}! 🎉`;
  }

  document.getElementById("playerScore").innerText = `You: ${playerScore}`;
  document.getElementById("compScore").innerText = `Computer: ${computerScore}`;
  document.getElementById("result").innerHTML = resultText;

  const congratsDiv = document.getElementById("congrats");
  if (congratsText !== "") {
    congratsDiv.innerText = congratsText;
    congratsDiv.style.display = "block";
  } else {
    congratsDiv.style.display = "none";
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("play-again").style.display = "inline-block";
  }
  function resetGame() 
  {
    playerScore=0;
    computerScore=0;

    document.getElementById("playerScore").innerText=`You:${playerScore}`;
    document.getElementById("compScore").innerText=`Computer:${computerScore}`;

    document.getElementById("result").innerHTML = "";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("congrats").style.display = "none";
  }