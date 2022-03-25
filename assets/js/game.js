debugger;
var enemyNames  = ["Roberto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames.length)
var fightOrSkip = function() {
    // ask player if they would like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.")
    if(promptFight === "" || promptFight === null) {
        window.alert("You need to provide a vailid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip"){
        window.alert(playerInfo.name + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from the playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money)
            return true;
            shop();
        }
    }
}
var fight = function(enemy) {
    var isPlayerTurn = true;
    if (Math.random() > .5) {
        isPlayerTurn = false;
    }
    // repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn){
            if (fightOrSkip()) {
                break;
            };   
            
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
            enemy.health = Math.max(0, enemy.health - damage);
            // Log a result message to the console so we know that it worked.
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
                // check enemy's health
                if (enemy.health<= 0){
                    window.alert(enemy.name + " has died!");
                    playerInfo.money = playerInfo.money + 20;
                    // shop option
                    break;
                }
                else {
                    window.alert(enemy.name+ " still has " + enemy.health + " health left.")
                }
            }
        else{

            // Subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable.
            var damage = randomNumber(enemy.attack - 3, enemy.attack)
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            //Log a resulting message to the console so we know that it worked.
            console.log (
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );
                if (playerInfo.health <= 0){
                    window.alert(playerInfo.name + " has died!");
                    break;
                }
                else{
                    console.log(playerInfo.name + " still has " + playerInfo.health +" health left.")
                    window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.')
                }
            }
            isPlayerTurn = !isPlayerTurn;
    }
};
var startGame = function (){
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pic new enemy to fight based on the index of the enemeyNames array
            // replay option
            var pickedEnemyObj = enemyInfo[i];
            // restest enemy.health before startting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            
            fight(pickedEnemyObj);

            //if we'er not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1 ) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost the robot battle! Game Over!");
            break;
        }
        
    }
    endGame();
}
var endGame = function(){
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
    window.alert("The game has now ended. Let's see how you did!");
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
        alert(playerInfo.name + " now has the high score of " + playerInfo.money "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    
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
var shop = function(){
    //ask player what the'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL, 2 for UPGRADE or 3 for LEAVE.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a vaild option. Try again.");
            shop();
    }
}
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = window.prompt ("What is the name of your robot?");
        return name;
    }

}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7){

            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        },
    upgradeAttack: function() {
        if (this.money >= 7){

            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        }
    
};
debugger;
var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
// start the game when the page loads
startGame();