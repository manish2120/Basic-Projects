    const btns = document.querySelectorAll('.playBtn');
    const auto = document.querySelector('.autoplay');

    auto.addEventListener('click', () => autoplay())

    //it returns NodeList, that's why using loop..
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.innerText === 'Rock') {
          playGame('rock');
        }
        else if (btn.innerText === 'Paper') {
          playGame('paper');
        }
        else if (btn.innerText === 'Scissors') {
          playGame('scissors');
        }
      });
    })

    const body = document.querySelector('body');
    body.addEventListener('keydown', (e) => {
      if (e.key === 'r') {
        playGame('rock');
      }
      else if (e.key === 'p') {
        playGame('paper');
      }
      else if (e.key === 's') {
        playGame('scissors');
      }
      else if (e.key === 'a') {
        autoplay();
      }
      else if (e.key === 'Backspace') {
        resetBtn();
      }
    })


    let score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }

    const resetBtn = document.querySelector('.reset');

    resetBtn.addEventListener('click', () => {

      lastConfirmation = document.querySelector('.confirmCheck');

      lastConfirmation.innerHTML = `<p class="confirmation">
        Are you sure you want to reset the score?
        <button class="confirmY">Yes</button>
        <button class="confirmN">No</button>
      </p>`;

      const yes = document.querySelector('.confirmY');
      const no = document.querySelector('.confirmN');

      const confirm = document.querySelector('.confirmation');

      yes.addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        confirm.classList.add('hide');
        localStorage.removeItem('score');
        updateScoreElement();
      })

      no.addEventListener('click', () => {
        confirm.classList.add('hide');
      })
    })


    updateScoreElement();

    let isAutoPlaying = false;
    let intervalId;
    function autoplay() {
      auto.innerText = 'Stop playing';

      if (!isAutoPlaying) {
        intervalId = setInterval(() => {
          playGame(pickComputerMove());
          // pickComputerMove();
          updateScoreElement();
        }, 1000)
        isAutoPlaying = true;
      }
      else {
        auto.innerText = 'Auto play';
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    function playGame(playerMove) {
      let result = '';

      if (playerMove === 'rock') {
        computerMove = pickComputerMove();

        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }

      }
      else if (playerMove === 'scissors') {
        computerMove = pickComputerMove();

        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      }
      else {
        computerMove = pickComputerMove();

        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      }

      if (result === 'You win.') {
        score.wins += 1;
      }
      else if (result === 'You lose.') {
        score.losses += 1;
      }
      else if (result === 'Tie.') {
        score.ties += 1;
      }

      const scoreData = JSON.stringify(score);
      const setData = localStorage.setItem('score', scoreData);

      document.querySelector('.winner').innerText = result;

      document.querySelector('.moves').innerText =
        `You picked ${playerMove}. Computer picked ${computerMove}.`
      updateScoreElement();
    }

    function updateScoreElement() {
      document.querySelector('.result').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }


    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }
