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
// Creates a form. Pass in string for ID.
function placeForm(a, b) {
  let parent = document.getElementById(a);
  let child = createForm(b);
  parent.append(child);
  return document.getElementById(b);
}
// Pass in the parent's ID, followed by the desired child's ID. Appends, but also returns the child element.
function createInputField(fieldName, fieldType, area) {
  let final = document.createElement('input');
  final.setAttribute('class', fieldName);
  if (area) {
    final.setAttribute('name', area);
  }
  final.setAttribute('value', fieldName);
  final.setAttribute('type', fieldType);
  return final;
}
// fieldName is the class and value, fieldType is obvious, area is optional and adds the name attribute.
function createText(type, text) {
  let final = document.createElement(type);
  let textSection = document.createTextNode(text);
  final.appendChild(textSection);
  return final;
}
function createButton() {
  let final = document.createElement('button');
}

function createNewGame() {
  let a = {};
  function createPlayerCharacter() {
    let final = {};

    let form = placeForm('creation-space', 'creation-form');

    let decisionPoints = {
      selectName: function() {
        let nameText = createText('h2', 'Name');
        let nameField = createInputField('charName', 'text');
        form.append(nameText);
        form.append(nameField);
      },
      selectGoodStat: function() {
        let lineBreak = document.createElement('br');
        let strField = createInputField('str', 'radio', 'stat');
        let strText = createText('p', 'Strength');
        form.append(strText);
        form.append(strField);
        let agiField = createInputField('agi', 'radio', 'stat');
        let agiText = createText('p', 'Agility');
        form.append(agiText);
        form.append(agiField);
        let conField = createInputField('con', 'radio', 'stat');
        let conText = createText('p', 'Constitution');
        form.append(conText);
        form.append(conField);
        let intField = createInputField('int', 'radio', 'stat');
        let intText = createText('p', 'Intelligence');
        form.append(intText);
        form.append(intField);
        let wilField = createInputField('wil', 'radio', 'stat');
        let wilText = createText('p', 'Will');
        form.append(wilText);
        form.append(wilField);
      }
    }

    function processDecisions() {

    }

    let startButton = createText('button', 'Get Started');
    form.append(startButton);

    return final;
  }
  let b = createPlayerCharacter();
  a.char = new PC(b);
  a.creationDate = Math.floor(Date.now() / 1000);
  gameSaves.push(new Game(a));
  console.log(gameSaves);
}
