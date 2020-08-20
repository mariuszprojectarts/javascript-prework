function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
    }else if(argMoveId == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
      if(argComputerMove == argPlayerMove){
        return 'Remis!';
      } else if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
        (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        return 'Ty wygrywasz!';
      } else {
        return 'Komputer wygrywa!';
      }
 }

//gra

let randomNumber = Math.floor(Math.random() * 3 + 1);
let argComputerMove  = getMoveName(randomNumber);
 
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = getMoveName(playerInput);

printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

//ustalenie zwycięzcy

printMessage(displayResult(argComputerMove, argPlayerMove));