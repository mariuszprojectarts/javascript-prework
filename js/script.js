{

  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove  = getMoveName(randomNumber),
      argPlayerMove = getMoveName(playerInput);

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

    const displayResult= function(argComputerMove, argPlayerMove){
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

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    //ustalenie zwycięzcy

    printMessage(displayResult(argComputerMove, argPlayerMove));

  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

}
