class Game {
  constructor(config) {
    this.mainCharacter = config.char;
    this.creationDate = config.creationDate;
  }
}

class Character {
  constructor(config) {
    this.charName = config.charName || 'Fergoddanaim';
    this.str = config.str || 5;
    this.agi = config.agi || 5;
    this.con = config.con || 5;
    this.int = config.int || 5;
    this.wil = config.wil || 5;
  }
}

class PC extends Character {
  constructor(config) {
    super(config);
  }
}

let gameSaves = [];

function createForm(a) {
  let final = document.createElement('form');
  final.setAttribute('id', a);
  return final;
}

function placeForm(a, b, c) {
  let parent = document.getElementById(a);
  parent.append(b);
  return document.getElementById(c);
}

function createField(fieldName, fieldType, area) {
  let final = document.createElement('input');
  final.setAttribute('class', fieldName);
  final.setAttribute('name', area);
  final.setAttribute('value', fieldName);
  final.setAttribute('type', fieldType);
  return final;
}

function createText(text) {
  let final = document.createElement('p');
  let textSection = document.createTextNode(text);
  final.appendChild(textSection);
  return final;
}

function createNewGame() {
  let a = {};
  function createPlayerCharacter() {
    let final = {};

    let z = 'creation-form';
    let form = placeForm('creation-space', createForm(z), z);

    // final.charName = prompt('What is your name?');

    function selectGoodStat() {
      let lineBreak = document.createElement('br');
      let strField = createField('str', 'radio', 'stat');
      let strText = createText('Strength');
      form.append(strText);
      form.append(strField);
      let agiField = createField('agi', 'radio', 'stat');
      let agiText = createText('Agility');
      form.append(agiText);
      form.append(agiField);
      let conField = createField('con', 'radio', 'stat');
      let conText = createText('Constitution');
      form.append(conText);
      form.append(conField);
      let intField = createField('int', 'radio', 'stat');
      let intText = createText('Intelligence');
      form.append(intText);
      form.append(intField);
      let wilField = createField('wil', 'radio', 'stat');
      let wilText = createText('Will');
      form.append(wilText);
      form.append(wilField);
    }
    selectGoodStat();
    
    return final;
  }
  let b = createPlayerCharacter();
  a.char = new PC(b);
  a.creationDate = Math.floor(Date.now() / 1000);
  gameSaves.push(new Game(a));
  console.log(gameSaves);
}
