const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        levelPlayer: document.querySelector("#level"),
    },
    values: {
        gameVelocity: 2000,
        hitPosition: 0,
        result: 0,
        currentTime: 20,
        level: 1,
        startTime: null,
        hitMin: 15,
    },

    actions: {
        timeId: setInterval(randomSquare, 1000),
        countDownTimeId: setInterval(countDown, 1000),
    },
};

function countDown(){
  state.values.currentTime --;
  state.view.timeLeft.textContent = state.values.currentTime
  
  if (state.values.currentTime < 0) {
      clearInterval(state.actions.countDownTimeId)
      clearInterval(state.actions.timeId)
      youScore();
  }
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function youScore() {
  if (state.values.result >= state.values.hitMin) {
      state.values.level++;
      state.view.levelPlayer.textContent = state.values.level;
      state.values.hitMin += 15;
  } else {
    alert("Geme Over! Você não atingiu a meta de scores.");
    clearInterval(state.actions.countDownTimeId);
    clearInterval(state.actions.timeId);
    return;
  }

  if (state.values.level <= 10) {
      alert(`Parabéns, você passou de nivel ${state.values.level}! Clique em Ok para ir para próxima fase.`);
      state.values.currentTime = 20; // Reset the timer for each level
      state.view.timeLeft.textContent = state.values.currentTime;
      state.view.levelPlayer.textContent = state.values.level;
      state.values.gameVelocity += 500;
      
      // Restart the game with new intervals
      clearInterval(state.actions.countDownTimeId);
      clearInterval(state.actions.timeId);
      state.actions.timeId = setInterval(randomSquare, state.values.gameVelocity);
      state.actions.countDownTimeId = setInterval(countDown, 1000);
  }
}


function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit");
            
        }    
      });
    });
}


function init() {
    addListenerHitBox();
}

init();