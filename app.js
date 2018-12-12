class Game {
  constructor(config) {
    this.mainCharacter = config.char;
  }
}

class Character {
  constructor(config) {
    this.charName = config.charName || 'Fergoddanaim';
    this.str = config.str || 1;
    this.agi = config.agi || 1;
    this.con = config.con || 1;
    this.int = config.int || 1;
    this.wil = config.wil || 1;
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
    creationDate: 0
  }
  a.char = new PC(b);
  a.creationDate = Math.floor(Date.now() / 1000)
  gameSaves.push(new Game(a))
}
