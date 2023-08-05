/**
 * --------------
 * DOM SELECTORS
 * --------------
 */
let hero = document.querySelector(".playerImage");
let enemy = document.querySelector(".enemyImage");
let heroName = document.querySelector(".player");
let enemyName = document.querySelector(".enemy");
let messageContainer = document.querySelector(".message-container");
let messageDiv = document.querySelector(".message");
let heroStats = document.querySelector(".playerStats");
let enemyStats = document.querySelector(".enemyStats");
let enemyNameBox = document.querySelector(".enemy");
let bodyContainer = document.querySelector(".bodyContainer");
let easy = document.querySelector(".menu li:nth-child(4)");
let medium = document.querySelector(".menu li:nth-child(5)");
let difficult = document.querySelector(".menu li:nth-child(6)");
let showPlayerStats = document.querySelector(".menu li:nth-child(7)");
let changeScenes = document.querySelector(".menu li:nth-child(8)");
let playerNameButton = document.querySelector(".playerNameButton");
let gameStats = document.querySelector(".gameStats");
let heroScore = document.querySelector(".heroScore");
let alienScore = document.querySelector(".alienScore");
let battleNum = document.querySelector(".battleNum");
let heroAcc = document.querySelector(".heroAcc");
let alienAcc = document.querySelector(".alienAcc");
/**
 * ------------------
 * FUN GIFS DISPLAYS
 * ------------------
 */
let winUrl =
  "https://media4.giphy.com/media/3IcEq6Cq9R9ErPoZIK/200w.gif?cid=790b7611roxssx9wfpzcjzhl154rjqiehhbuzasdtwa723r8&ep=v1_gifs_search&rid=200w.gif&ct=g";
let loseUrl = "https://media.tenor.com/jL6Frsqda74AAAAC/game-over.gif";
let explodeGif =
  "https://64.media.tumblr.com/be7d736a22463bab1d67e611d864b5bd/tumblr_mlhg9xoGMm1sn65iqo1_r1_500.gif";
let congratsGif =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm94c3N4OXdmcHpjanpobDE1NHJqcWllaGhidXphc2R0d2E3MjNyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RtpmUzMbynBeCgEa5E/200.gif";

let scene1 =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ca0366a-2924-452d-8c9d-0f8617807e22/dcatq78-8b3818c2-9e03-4179-9601-e87ac825a0ef.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjYTAzNjZhLTI5MjQtNDUyZC04YzlkLTBmODYxNzgwN2UyMlwvZGNhdHE3OC04YjM4MThjMi05ZTAzLTQxNzktOTYwMS1lODdhYzgyNWEwZWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kk1b_iX4C7FU7Usd6TfmN7UlSVFXjRWK4zMxk7wcL_0";
let scene2 =
  "https://cutewallpaper.org/21/stars-background-gif/Background-Textures-and-Images-Library-Free-Download-GRSites.gif";
let scene3 =
  "https://tuckerandmikesgnarlyextremeblog.files.wordpress.com/2017/03/9ca14e23ebbc1fc56d6ee16ef04c87f2_super-rare-8-bit-pepe-8-bit-space-background-gif_493-277.gif";
let scene4 =
  "https://i.pinimg.com/originals/ef/e9/26/efe926ee0e98525d7d1567a54ad3e39f.gif";
let scene5 =
  "https://i.pinimg.com/originals/e1/b9/c5/e1b9c5f696d6f136c3eca1b26ac8c846.gif";
let scene6 =
  "https://openseauserdata.com/files/53a853de71730eb1b21a0ba360b74804.gif";
/**
 * --------------------------
 * CREATE CAST OF CHARACTERS
 * --------------------------
 * One hero and Six enemy
 * Hero has: hull - 20, firepower - 5, accuracy - .7
 * Enemy has: hull - between 3 and 6, firepower - between 2and 4, accuracy - between .6and .8
 */

/**
 * ------------
 * SHIPS CLASS
 * ------------
 * Hero Ship and Enemy Ship inherits from Ships class.
 * It has one useful method - attack()
 */

class Ships {
  constructor(type, hull, firepower, accuracy) {
    this.type = type;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.getType = this.getType.bind(this);
    this.attack = this.attack.bind(this);
  }
  getType() {
    console.log(this.type);
  }

  /**
   * Attack method's parameter takes an enemy to be attacked
   * The method returns boolean isSuccessful, which determines whos turn it is
   * to attack.
   */
  attack(enemy) {
    let attackIsSuccessful = true;
    let heroScore = 0;
    let alienScore = 0;
    const pTag = document.createElement("p");

    if (Math.random() < this.accuracy) {
      enemy.hull -= this.firepower;
      /// score function
      enemy.type === "Hero"
        ? (alienScore += this.firepower)
        : (heroScore += this.firepower);
      /// score function
      pTag.innerText = `${this.type} attacked ${enemy.type}!.${this.type}'s firepower is ${this.firepower}. 
      \n${enemy.type} hull is now: ${enemy.hull}.`;
      messageDiv.appendChild(pTag);
      attackIsSuccessful = true;
    } else {
      pTag.innerText = `${this.type} has missed ${enemy.type}`;
      messageDiv.appendChild(pTag);
      attackIsSuccessful = false;
    }
    console.log(`${this.type} success of attack : ${attackIsSuccessful}`);
    return attackIsSuccessful;
  }
}

/**
 * ---------------------
 * HERO AND ENEMY SHIPS
 * ---------------------
 * Hero is the same as the Ships class.
 * Enemy has random property values using the genRand function.
 */

class Hero extends Ships {
  constructor(type, hull, firepower, accuracy) {
    super(type, hull, firepower, accuracy);
  }
}

class Enemy extends Ships {
  constructor(type, hull, firepower, accuracy, image) {
    super(type, hull, firepower, accuracy, image);
    this.type = "Alien";
    this.hull = Math.floor(genRand(3, 6));
    this.firepower = Math.floor(genRand(2, 4));
    this.accuracy = genRand(0.6, 0.8).toFixed(1);
  }
}

/**
 * -----------------------------------
 * FUNCTION FOR RANGED RANDOM NUMBERS
 * -----------------------------------
 */
const genRand = (start, end) => Math.random() * (end - start) + start;

/**
 * -------------------------------
 * FUNCTION TO CREATE ENEMY ARRAY
 * -------------------------------
 */
const createEnemies = (count) => {
  let enemyArray = [];
  for (let i = 1; i <= count; i++) {
    enemyArray.push(new Enemy());
  }
  return enemyArray;
};

/**
 * ----------------
 * THE GAME OBJECT
 * ----------------
 */

const Game = {
  myShip: new Hero("Hero", 20, 5, 0.7),
  aliens: [],
  isHeroTurn: true,
  playerElements: [hero, enemy],
  hitPoints: [[], []],
  heroHitPoints: 0,
  alienHitPoints: 0,
  abortGame: () => {
    if (Game.isHeroTurn === true) {
      let ans = prompt("You hit an alien ship!, abort mission?", "no");
    } else {
      window.alert("Game Over");
      Game.restart();
    }
  },
  changeColor: (char) => (char.style.border = "8px solid red"), //styling function
  removeColor: (char) => (char.style.border = "none"), //styling function
  changeBgImage: (char, url) => (char.style.backgroundImage = `url(${url})`), //styling function

  /**
   * Update all the stats in UI enemy count, enemy and hero stats
   */

  calculateAccuracy: (charHitPointsArray) => {
    if (Game.hitPoints[charHitPointsArray].length !== 0) {
      return (
        (Game.hitPoints[charHitPointsArray].filter((n) => n !== 0).length /
          Game.hitPoints[charHitPointsArray].length) *
        100
      ).toFixed(2);
    } else {
      return 0;
    }
  },

  updateStats: (shipType) => {
    enemyNameBox.innerText = `Aliens left: ${Game.aliens.length}`;
    const ul = document.createElement("ul");
    heroScore.innerText = `Hero's Hit Points: ${Game.heroHitPoints}`;
    heroAcc.innerText = `Hero's Hit Accuracy: ${Game.calculateAccuracy(0)} %`;
    alienScore.innerText = `Alien's Hit Points: ${Game.alienHitPoints}`;
    alienAcc.innerText = `Alien's Hit Accuracy: ${Game.calculateAccuracy(1)}%`;
    battleNum.innerText = `Battle Number: ${Game.hitPoints[0].length}`;
    gameStats.appendChild(battleNum);
    gameStats.appendChild(heroScore);
    gameStats.appendChild(heroAcc);
    gameStats.appendChild(alienScore);
    gameStats.appendChild(alienAcc);

    for (let property in shipType) {
      //prettier-ignore // iterate through the objects property to display
      if (
        property === "hull" ||
        property === "firepower" ||
        property === "accuracy"
      ) {
        const list = document.createElement("li");
        list.innerText = `${property}: ${shipType[property]} `;
        ul.appendChild(list);
      }
      //prettier-ignore // if the ship is hero append to hero, if not append to enemy
      shipType === Game.myShip
        ? heroStats.replaceChildren(ul)
        : enemyStats.replaceChildren(ul);
    }
  },

  /**
   * This is just a bundle of of updateStats, since I have to update myship and aliens at the same time
   */
  updateAllStats: () => {
    Game.updateStats(Game.myShip);
    Game.updateStats(Game.aliens[0]);
  },

  /**
   * Instead of a while loop to restart the game. I'm reloading the page with 3.5 second delay
   * to see the win or lose graphics.
   */
  restart: () => setTimeout(() => document.location.reload(), 3500),

  /**
   * Checks the status of the game, based on enemy array length and hero ship hull.
   * Updates the UI based on these conditions and asks if player wants to re-start
   * which calls the restart function
   */
  checkGameStatus: () => {
    if (Game.aliens.length === 0) {
      const pTag = document.createElement("p");
      pTag.innerText = "GOOD GAME CAPTAIN!";
      messageDiv.appendChild(pTag);
      //prettier-ignore
      answer = prompt(`Captain ${heroName.textContent}, WON this battle! Play again?`,"yes");
      Game.changeBgImage(enemy, explodeGif);
      Game.changeBgImage(hero, congratsGif);
      Game.changeBgImage(bodyContainer, winUrl);
      answer === "yes" ? Game.restart() : window.alert("Game Over");
    } else if (Game.myShip.hull <= 0) {
      answer = prompt("ALIENS WIN! Play again?", "yes");
      Game.changeBgImage(bodyContainer, loseUrl);
      answer === "yes" ? Game.restart() : window.alert("Game Over");
    }
  },

  /**
   * Initiates the game play. It creates an array of enemies based on mode selected then, updates the stats.
   * Both the hero and enemy has event listeners, technically anywhere you click you will get the same action.
   * The red border that moves between two characters mimicks a prompt for a click.
   *
   * Before the start of the attack the aliens array is filtered to remove the "dead alien".
   * All characters has an attack method, this attack method returns whose turn it is to attack.
   * Based on this result the red border "moves" on whose attacking. After this is determined
   * After each attack, Game status is checked and UI is updated based on the attack.
   */
  play: (mode) => {
    Game.aliens = createEnemies(mode);
    Game.updateAllStats();
    Game.playerElements.forEach((playerElement) => {
      playerElement.addEventListener("click", (event) => {
        messageDiv.innerText = "";
        const enemyImage = document.querySelector(".enemyImage");
        //prettier-ignore
        enemyImage.style.backgroundImage = `url("./images/enemy${Math.floor(genRand(1, 6))}.gif")`;

        Game.aliens = Game.aliens.filter((alien) => alien.hull > 0);

        if (Game.aliens.length > 0) {
          // Game.abortGame(); // This is disruptive, but it works.
          Game.isHeroTurn = Game.myShip.attack(Game.aliens[0]);
          Game.hitPoints[0].push(Game.isHeroTurn ? Game.myShip.firepower : 0);
          //prettier-ignore
          Game.hitPoints[1].push((!Game.isHeroTurn) ? Game.aliens[0].firepower : 0);
          //prettier-ignore
          console.log(`If Hero hits determine if hero wants to abort game. Hit: ${Game.isHeroTurn}.`);
          if (Game.isHeroTurn === false) {
            Game.changeColor(hero);
            Game.removeColor(enemy);
            Game.isHeroTurn = Game.aliens[0].attack(Game.myShip);
          } else if (Game.isHeroTurn === true) {
            // Game.abortGame(); // This is disruptive, but it works.
            Game.changeColor(enemy);
            Game.removeColor(hero);
          }
        }

        Game.checkGameStatus();
        Game.updateAllStats();
        const pTag = document.createElement("p");
        pTag.innerText = `Aliens left: ${Game.aliens.length}`;
        messageDiv.appendChild(pTag);

        console.log("Hero HitPoints: ", Game.hitPoints[0]);
        console.log("Alien HitPoints: ", Game.hitPoints[1]);
        Game.heroHitPoints = Game.hitPoints[0].reduce((a, e) => a + e);
        Game.alienHitPoints = Game.hitPoints[1].reduce((a, e) => a + e);

        console.log(`Aliens left: ${Game.aliens.length}`);
      });
    });
  },
};

/**
 * -------------
 * GAME OPTIONS
 * -------------
 * Mode selection and Change Wall Papers
 * Clicking any mode will start a return a new Game Play object with selected difficulty
 * Player's name Submit and Change Scenes does not affect game Play.
 * New in Version 3 - Show Player Stats
 */

// Technically a player can still plays after its game over, the state of the previous game is preserved
// because its clicking any of the modes will just start a new game play. This function
// checks if there is previous scores from the last battle, if so then reset, if no scores stored then
// initiate a game play
const resetIfPlayed = (mode) => {
  Game.hitPoints[0].length !== 0
    ? document.location.reload() && Game.play(mode)
    : Game.play(mode);
};

easy.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("easy mode selected: 6 Aliens");
  return resetIfPlayed(6);
});

medium.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("medium mode selected: 15 Aliens");
  return resetIfPlayed(15);
});

difficult.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("difficult mode selected: 30 Aliens");
  return resetIfPlayed(30);
});

let scenes = [scene1, scene2, scene3, scene4, scene5, scene6];
changeScenes.addEventListener("click", (e) => {
  let sceneNumber = Math.floor(Math.random() * scenes.length + 1);
  console.log(sceneNumber);
  return (bodyContainer.style.backgroundImage = `url(${scenes[sceneNumber]})`);
});

playerNameButton.addEventListener("click", (e) => {
  e.preventDefault();
  let playerName = document.querySelector(".playerName").value;
  heroName.innerText = `USS ${
    playerName === "Captain" ? "Lincoln" : playerName
  }`;
});

// *NEW IN VERSION 3 - Show Hide Stats
showPlayerStats.addEventListener("click", () => {
  console.log(showPlayerStats.innerText);
  gameStats.getAttribute("class").split(" ").includes("hide")
    ? (showPlayerStats.innerText = "HIDE Stats")
    : (showPlayerStats.innerText = "SHOW Stats");
  gameStats.classList.toggle("hide");
});
