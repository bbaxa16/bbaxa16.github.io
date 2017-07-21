$(()=>{ //window onload

//global variables
let ourPoke = " ";
let wildPoke = " ";


  class Pokemon { //creating a pokemon class
    constructor (name, level, poketype, img){
      this.name = name;
      this.level = level;
      this.xp = 5;
      this.poketype = poketype;
      this.img = img;
      this.accuracy = '';
      this.hp = 100;
      this.coin = 300;
    }
    getAccuracy(){ //this will give all pokes a randomly generated accuracy between .4 and .7.
      this.accuracy = Math.random() * (.7 - .4) + .4;
      console.log(this.accuracy);
    }
    attack(wildPoke){ //have different attacks based on poketype
      if(this.poketype === "water"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          alert('Water gun was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            alert('Water gun was very effective. ' + wildPoke.name + ' fainted.' );
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){
            game.checkBattleWinner();
          }
        }
          else {
            alert('attack missed!');
          }
      }
      else if (this.poketype === "grass"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          alert('Razor leaf was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            alert('Razor leaf was very effective. ' + wildPoke.name + ' fainted.');
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){
            game.checkBattleWinner();
          }
        }
          else {
            alert(this.name + ' missed.');
          }
      }
      else if (this.poketype === "fire"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          alert('Fireball was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            alert('Fireball was very effective. ' + wildPoke.name + ' fainted.');
            this.coin +=325;
            game.checkBattleWinner();
          }
          else if(this.hp <= 0){//check to see if we dead
            game.checkBattleWinner();
          }
        }
          else {
            alert(this.name + ' missed.');
          }

      }
      else if (this.poketype === "electric"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          alert('lightning strike was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            alert('lightning strike was very effective. ' + wildPoke.name + ' fainted.');
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){//check to see if we dead.
            game.checkBattleWinner();
          }
        }
          else {
            alert(this.name + ' missed.');
          }
      }
    }
  }

  //creating all the different pokemon.
  const pikachu = new Pokemon("pikachu", 1, "electric", $('<img src="../img/pikachu.png">').addClass('pokeImages'));
  const charmander = new Pokemon("charmander", 1, "fire", $('<img src="../img/charmander.png">').addClass('pokeImages'));
  const squirtle = new Pokemon("squirtle", 1, "water", $('<img src="../img/squirtle.png">').addClass('pokeImages'));
  const froakie = new Pokemon("froakie", 1, "water", $('<img src="../img/froakie.png">').addClass('pokeImages'));
  const bellsprout = new Pokemon("bellsprout", 1, "grass", $('<img src="../img/bellsprout.png">').addClass('pokeImages'));

  //create an array of the pokemon we will battle
  const wildArr = [pikachu,froakie];
  //create an array of the pokemon we will battle with
  const ourArr = [squirtle,bellsprout,charmander];
  //create a function that will randomly select our opponent.
  const chooseWildPoke = () => {
      let wildPoke = wildArr[Math.floor(Math.random()* wildArr.length)];
      return wildPoke;
  }
  //create a function that will randomly select our pokemon
  const chooseOurPoke = () => {
    let ourPoke = ourArr[Math.floor(Math.random()* ourArr.length)];
    return ourPoke;
  }

  //game object
const game = {
  rounds: 1,
  checkBattleWinner(){
    if(ourPoke.hp <= 0){
      this.overMessage();
    }
    else {
      alert('YOU WON THE BATTLE FUCK YES!');
      game.rounds ++;
      const newRound = prompt('Ready for the next round?');
      if(newRound === 'yes'){
        alert('Round ' + this.rounds + ' begin!');
        game.start();
      }
      else {
        let restart = prompt('Would you like to restart?', 'yes/no');
         if(restart === 'yes'){
           alert('need to refresh battleground page/take them back to index.html')

         }
         else{
           alert('back to index.html you go');
         }
      }
    }
  },
  overMessage(){
    alert('game over sucka');
     let restart = prompt('Would you like to restart?', 'yes/no');
      if(restart === 'yes'){
        alert('need to refresh battleground page/take them back to index.html')

      }
      else{
        alert('back to index.html you go');
      }
  },
  gameWinner(){
    alert('YOU HAVE BEATEN THE GAME, YOU ARE THE ONE TRUE POKÉMON MASTER!')
  },
  start(){ //conditionals for rounds
    if(this.rounds === 1){
      //chooses the wild pokemon we will battle
      wildPoke = chooseWildPoke();
      //alerts us which pokemon has been chosen
      alert('Wild ' + wildPoke.name + ' appeared!');
      //attachs the wild pokemon img to its respective div
      $('#wildPoke').append(wildPoke.img).addClass('wildPoke');
      //create an attack button that will first get our accuracy, then attack the enemy poke. they will then attack too.
      const $attackButton = $('<button>A T T A C K</button>');
      //remove the battle button
      $('#battle').remove();
      //attach the button to our pokemon
      $('#ourPoke').append($attackButton);
      this.showOurPokeSpecs()
      this.showWildPokeSpecs()
      this.roundCounter()
      //create an eventlistener for this button, and have a attackbutton method that runs all the game functions we need it to?
      $($attackButton).on('click', function(){
         //ourPoke.getAccuracy();
         ourPoke.accuracy = 2;
         ourPoke.attack(wildPoke);
         game.showWildPokeSpecs();
         wildPoke.getAccuracy();
         wildPoke.attack(ourPoke);
         game.showOurPokeSpecs();
    })
  }
    else if(game.rounds <=3) {
    game.roundCounter();
    ourPoke.hp += 1000;
    wildPoke = chooseWildPoke()
    wildPoke.hp = 100
    alert('Wild ' + wildPoke.name + ' appeared!')
    $('#wildPoke').append(wildPoke.img)
    game.showOurPokeSpecs()
    game.showWildPokeSpecs()
    }
    else {
      game.gameWinner();
    }
  },
  showOurPokeSpecs(){
    $('#ourPokeSpecs').css('display','inline-block')
    $('#ourPokeSpecs').children().eq(0).html(ourPoke.name)
    $('#ourPokeSpecs').children().eq(1).children().eq(0).html('hp: ' + ourPoke.hp)
    $('#ourPokeSpecs').children().eq(1).children().eq(1).html('level: ' + ourPoke.level)
    $('#ourPokeSpecs').children().eq(1).children().eq(2).html('pokétype: ' + ourPoke.poketype)


  },
  showWildPokeSpecs(){
    $('#wildPokeSpecs').css('display','inline-block');
    $('#wildPokeSpecs').children().eq(0).html(wildPoke.name)
    $('#wildPokeSpecs').children().eq(1).children().eq(0).html('hp: ' + wildPoke.hp)
    $('#wildPokeSpecs').children().eq(1).children().eq(1).html('level: ' + wildPoke.level)
    $('#wildPokeSpecs').children().eq(1).children().eq(2).html('pokétype: ' + wildPoke.poketype)

  },
  roundCounter(){
    $('#subheader').css('display','inline-block');
    $('#subheader').children().eq(0).html('Round: ' + game.rounds)
  }
}

//**************************************************************************


//modal test
// const modalPick = $('#pickYourPokeModal');
// $('#test').on('click', function() {
//   modalPick.css('display',"block");
//   $('.testPoke').on('click', function() {
//     alert('You picked Charmander! Prepare for Battle!');
//     //trying to link the charmander object to this div.
//     $(pokeChoice1).data(charmander);
//     start();
//   })
// })
//come back to the modal idea later, switching to prompts to get through functionality.
// const createModal = (name) => {
//   $('.container').remove();
//   name.innerText = name
//   $('#user-modal').append(name);
// }
$('#ready').on('click', function(){
  //selects our pokemon we will battle with
  ourPoke = chooseOurPoke();
  //removes the 'ready to battle' button
  $('#ready').remove();
  //puts our Poke on the battlefield
  $('#ourPoke').append(ourPoke.img);
  //tells us who are pokemon is going to be
  alert('Your pokémon is ' + ourPoke.name);
  // creates and attachs our battle button, when clicked will run the start().
  const $battleButton = $('<button>Battle!</button>').attr('id', 'battle');
  $('.container').append($battleButton);
  $($battleButton).on('click', function(){
    game.start();

})
})
//****************************none of the stuff below matters *****************
//
// const pickUrPoke = () => { //usually called on '#ready' but taking it out for now
//   //removes the ready for battle button
//   $('#ready').remove();
//   //removes the pokemon photo
//   $('.default').remove();
//   //adds the pick your Pokemon header
//   const $pickYourPoke = $('<h1>Pick Your Pokémon</h2>');
//   $('#header').append($pickYourPoke);
//   //creates 3 new divs that will house the pokemon choices.
//   const pokeChoice1 = $('<div/>').addClass('pokeChoice');
//   //$(pokeChoice1).attr('id', 'pokeChoice1'); why wont it give it an id
//
//   const pokeChoice2 = $('<div/>').addClass('pokeChoice');
//   const pokeChoice3 = $('<div/>').addClass('pokeChoice');
//   $('.container').append(pokeChoice1);
//   $('.container').append(pokeChoice2);
//   $('.container').append(pokeChoice3);
//   //adds pokenames to the divs.
//   const $headerCharmander = $('<h2>Charmander</h2>');
//   const $headerFroakie = $('<h2>Froakie</h2>');
//   const $headerBellsprout = $('<h2>Bellsprout</h2>');
//   $(pokeChoice1).append($headerCharmander);
//   $(pokeChoice2).append($headerFroakie);
//   $(pokeChoice3).append($headerBellsprout);
//   //adds images of the pokemon choices to their respectice divs.
//   const $imgCharmander = $('<img src="../img/charmander.png">').addClass('pokeImages');
//   const $imgFroakie = $('<img src="../img/froakie.png">').addClass('pokeImages');
//   const $imgBellsprout = $('<img src="../img/bellsprout.png">').addClass('pokeImages');
//   $(pokeChoice1).append($imgCharmander);
//   $(pokeChoice2).append($imgFroakie);
//   $(pokeChoice3).append($imgBellsprout);
//   //adds specs of the pokemon choices
//   const $specsCharmander = $('<ul><li>Pokétype: fire</li></ul><p>Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.</p>');
//   const $specsFroakie = $('<ul><li>Pokétype: water</li></ul><p>It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.</p>')
//   const $specsBellsprout = $('<ul><li>Pokétype: grass</li></ul><p>Prefers hot and humid places. It ensnares tiny insects with tis vines and devours them.</p>');
//   $(pokeChoice1).append($specsCharmander);
//   $(pokeChoice2).append($specsFroakie);
//   $(pokeChoice3).append($specsBellsprout);
//   //create 3 different event listeners for each pokemon choice.
//   $(pokeChoice1).on('click', function() {
//     $(pokeChoice1).off('click');
//     alert('You picked Charmander! Prepare for Battle!');
//     $('#header').children().eq(1).remove();
//     const $battleButton = $('<button>Battle!</button>').attr('id', 'battle');
//     $('.container').append($battleButton);
//     $(pokeChoice2).remove();
//     $(pokeChoice3).remove();
//     $($battleButton).on('click', function(){
//       game.start();
//     })
//     //createModal(Charmander);
//     //trying to link the charmander object to this div.
//     //$(pokeChoice1).data(charmander);
//     //$('.container').remove();
//     // $(pokeChoice2).remove();
//     // $(pokeChoice3).remove();
//     // $(pokeChoice1).css('display:', 'center');
//     //start();
//
//   });
//   $(pokeChoice2).on('click', function(){
//     alert('You picked Froakie!');
//   });
//   $(pokeChoice3).on('click', function(){
//     alert('You picked Bellsprout!');
//   });
// }

//createModal function
// const createModal = (name) => {
//   $('.container').remove();
//   name.innerText = name
//   $('#user-modal').append(name);

  // $('#user-modal').css('display','block');
  // $('#user-modal').append('<iframe src="https://giphy.com/embed/YzABsnRu6dM1a" width="480" height="382" frameBorder="0" allowFullScreen></iframe>').attr('id', 'charGif');


}) //close of window onload


// pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);
