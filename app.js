class Game {
  constructor(config) {
    this.mainCharacter = config.char;
    this.creationDate = config.creationDate;
  }
}

class Character {
  constructor(config) {
    this.charName = config.charName || 'Fergoddanaim';
    this.str = { val: config.str || 5, exp: 0 };
    this.agi = { val: config.agi || 5, exp: 0 };
    this.con = { val: config.con || 5, exp: 0 };
    this.int = { val: config.int || 5, exp: 0 };
    this.wil = { val: config.wil || 5, exp: 0 };
  }
}

class PC extends Character {
  constructor(config) {
    super(config);
  }
}

let gameSaves = [];

function createFormWithOptions(formId, parentElement, options, submitText, endButton, endButtonId) {
  let finalForm = createFormBase(formId);
  let parent = document.getElementById(parentElement);
  parent.append(finalForm);
  for (let i = 0; i < options.length; i++) {
    let optionName = createText('p', options[i].optionName);
    finalForm.append(optionName);
    let optionField = createInputField(options[i].optionName, options[i].optionType, options[i].optionArea);
    finalForm.append(optionField);
  }
  let submitButton = createText('h4', endButton);
  submitButton.setAttribute('id', endButtonId);
  finalForm.append(submitButton);
  return finalForm;
}
function createFormBase(id) {
  let final = document.createElement('form');
  final.setAttribute('id', id);
  return final;
}
// Creates a form. Pass in string for ID.
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

    let decisionPoints = {
      selectName: function() {
        let options = [{
          optionName: 'Character Name',
          optionType: 'text'
        }];
        createFormWithOptions('creation-form', 'creation-space', options, 'Give Name', 'Continue', 'char-creation-select-button');
      },
      selectGoodStat: function() {
        let options = [
          {
            optionName: 'Strength',
            optionType: 'radio',
            optionArea: 'stat'
          },
          {
            optionName: 'Agility',
            optionType: 'radio',
            optionArea: 'stat'
          },
          {
            optionName: 'Constitution',
            optionType: 'radio',
            optionArea: 'stat'
          },
          {
            optionName: 'Intelligence',
            optionType: 'radio',
            optionArea: 'stat'
          },
          {
            optionName: 'Willpower',
            optionType: 'radio',
            optionArea: 'stat'
          }
        ];
        createFormWithOptions('creation-form', 'creation-space', options, 'Select Good Stat', 'End', 'final-char-creation-select-button');
      }
    }

    function processDecisions() {
      decisionPoints.selectName();
      var promise1 = new Promise(function(resolve, reject) {
        document.getElementById('char-creation-select-button').addEventListener('click', function() {
          setTimeout(function() {
            resolve(decisionPoints);
          }, 500);
        });
      });
      promise1.then(function(obj) {
        obj.selectGoodStat();
      });
    }

    processDecisions();
    let charCreationEndPromise = new Promise(function(resolve, reject) {
      document.getElementById('final-char-creation-select-button').addEventListener('click', function() {
        setTimeout(function() {
          resolve(final);
        }, 500);
      });
    });
    // In all honesty, the smartest thing to do would probably be to have a function create the form/form sections, store all of that information, then pass it into the newgame function.
    charCreationEndPromise.then(function(a) {
      console.log(a);
    });
    // return final;
  }
  let b = createPlayerCharacter();
  console.log(b);
  // Next, put all of the below inside a promise that fires after the character has been successfully created.
  // a.char = new PC(b);
  // a.creationDate = Math.floor(Date.now() / 1000);
  // gameSaves.push(new Game(a));
  // console.log(gameSaves);
}
