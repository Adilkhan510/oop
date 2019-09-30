const myPokemon= [
    {
        name: "Bulbasaur",
        damage: 60
    }, {
        name: "Caterpie",
        damage: 40
    }, {
        name: "Charmander",
        damage: 60
    }, {
        name: "Clefairy",
        damage: 50
    }, {
        name: "Jigglypuff",
        damage: 60
    }, {
        name: "Mankey",
        damage: 30
    }, {
        name: "Meowth",
        damage: 60
    }, {
        name: "Nidoran - female",
        damage: 60
    }, {
        name: "Nidoran - male",
        damage: 50
    }, {
        name: "Oddish",
        damage: 40
    }, {
        name: "Pidgey",
        damage: 50
    }, {
        name: "Pikachu",
        damage: 50
    }, {
        name: "Poliwag",
        damage: 50
    }, {
        name: "Psyduck",
        damage: 60
    }, {
        name: "Rattata",
        damage: 30
    }, {
        name: "Squirtle",
        damage: 60
    }, {
        name: "Vulpix",
        damage: 50
    }, {
        name: "Weedle", 
        damage: 40
    }
];

class Game {
    constructor(player, cpu, array){
        this.player = player;
        this.cpu = cpu;
        this.cardDeck = array.slice();
        this.playersHand= [];
        this.cpuHand = [];
        this.playerScore = 0;
        this.cpuScore = 0;
    }
    giveCardstocpu(){
        for(let i=0; i<3; i++){
            let r = Math.floor(Math.random()* (this.cardDeck.length))
            this.cpuHand.push(this.cardDeck[r]);
            this.cardDeck.pop([r]);
        };
    }
    giveCardstoplayer(){
        for(let i=0; i<3; i++){
            let r = Math.floor(Math.random()* (this.cardDeck.length))
            this.playersHand.push(this.cardDeck[r]);
            this.cardDeck.pop([r]);
        }
    }
    showPlayerHand(){
        console.log(this.playersHand)
    }
    dicatateWinner(){
        if(this.playersHand[0].damage > this.cpuHand[0].damage){
           this.playerScore = this.playerScore+1;
           this.playersHand.shift();
           this.cpuHand.shift();
        } else if(this.cpuHand[0].damage > this.playersHand[0].damage){
            this.cpuScore = this.cpuScore +1;
            this.playersHand.shift();
            this.cpuHand.shift();
        } else (console.log("draw"))
    }
    player1Score(){
        console.log(this.playerScore)
    }
};


class Player {
    constructor(cardsInHand, playerScore, array){
        this.cardsInHand = cardsInHand;
        this.playerScore = playerScore;
        this.cardDeck;
    }
    seeCards (){
        console.log(this.cardDeck)
    }
};
const pokemon = new Game([], [], myPokemon);

pokemon.giveCardstocpu();
pokemon.giveCardstoplayer();
pokemon.showPlayerHand();
pokemon.dicatateWinner();
pokemon.player1Score();
console.log(pokemon.cpuScore);
pokemon.dicatateWinner();
pokemon.player1Score();
pokemon.dicatateWinner();










// const player1 = new Player([],0, pokemon2);
// player1.getCards();
// player1.getCards();
// player1.getCards();
// player1.getCards();
// player1.getCards();
// player1.getCards();
// console.log(player1);

// // class CpuPlayer extends Player{
// //     constructor(cardsInHand, playerScore, roundsWon){
// //         super(cardsInHand, playerScore, roundsWon);
// //     }
// //     pickArandomCard(){

// //     }
// // };
