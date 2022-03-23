var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log mutiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames  = ["Roberto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames.length)
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        // Alert players that they are starting the round
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");
        // Subtract the value of the 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        if (promptFight === "skip" || promptFight === "SKIP"){
            window.alert(playerName + " has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from the playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        enemyHealth = enemyHealth - playerAttack;
        // Log a result message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy's health
            if (enemyHealth<= 0){
                window.alert(enemyName + " has died!");
                // shop option
                break;
            }
            else {
                window.alert(enemyName+ " still has " + enemyHealth + " health left.")
            }
            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
            //Log a resulting message to the console so we know that it worked.
            console.log (
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            }
            else{
                console.log(playerName + " still has " + playerHealth +" health left.")
                window.alert(playerName + ' still has ' + playerHealth + ' health left.')
            };
    }
};
var startGame = function (){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pic new enemy to fight based on the index of the enemeyNames array
            // replay option
            var pickedEnemtNmae = enemyNames[i];
            // restest enemyHealth before startting new fight
            enemyHealth = 50;
            
            debugger;
            fight(pickedEnemtNmae);
        }
        else {
            window.alert("You have lost the robot battle! Game Over!");
            break;
        }
        
    }
    endGame();
}
var endGame = function(){
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
    // ask player if they'd like to play again?
    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
// start the game when the page loads
startGame();