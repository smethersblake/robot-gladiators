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
        // window.alert("Welcome to Robot Gladiators!");
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
for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    // call fight function with enemy-robot
    enemyHealth = 50;
    fight(enemyNames[i]);
}
// fight();


