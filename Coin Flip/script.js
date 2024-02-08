  const randomNumber = Math.random();
  let result = "";

  let retrievedData = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
  };

  let score = retrievedData;

  function playGame(guess) {
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    if (guess === result) {
      score.wins += 1;
    }
    else {
      score.losses += 1;
    }
    console.log(score);
    const convertData = JSON.stringify(score);
    const storeData = localStorage.setItem('score', convertData);
  }
