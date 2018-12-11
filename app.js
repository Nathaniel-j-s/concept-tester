class Game {
  constructor(config) {
    this.mainCharacter = config.char;
  }
}

class Character {
  constructor(config) {
    this.charName = config.charName;
  }
}

class PC extends Character {
  constructor(config) {
    super(config);
  }
}

let gameSaves = [];

function createNewGame() {
  let a = {
    char: {}
  }
  let b = {}
  let c = new PC(b);
  gameSaves.push(new Game(a))
}
