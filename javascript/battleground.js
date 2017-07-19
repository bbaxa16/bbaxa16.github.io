$(()=>{ //window onload

$('#ready').on('click', function(){
  pickUrPoke();
})
const pickUrPoke = () => {
  //removes the ready for battle button
  $('#ready').remove();
  //removes the pokemon photo
  $('.default').remove();
  //adds the pick your Pokemon header
  const $pickYourPoke = $('<h1>Pick Your Pokémon</h2>');
  $('#header').append($pickYourPoke);
  //creates 3 new divs that will house the pokemon choices.
  const pokeChoice1 = $('<div/>').addClass('pokeChoice');
  const pokeChoice2 = $('<div/>').addClass('pokeChoice');
  const pokeChoice3 = $('<div/>').addClass('pokeChoice');
  $('.container').append(pokeChoice1);
  $('.container').append(pokeChoice2);
  $('.container').append(pokeChoice3);
  //adds pokenames to the divs.
  const $headerCharmander = $('<h2>Charmander</h2>');
  const $headerFroakie = $('<h2>Froakie</h2>');
  const $headerBellsprout = $('<h2>Bellsprout</h2>');
  $(pokeChoice1).append($headerCharmander);
  $(pokeChoice2).append($headerFroakie);
  $(pokeChoice3).append($headerBellsprout);
  //adds images of the pokemon choices to their respectice divs.
  const $imgCharmander = $('<img src="../img/charmander.png">').addClass('pokeImages');
  const $imgFroakie = $('<img src="../img/froakie.png">').addClass('pokeImages');
  const $imgBellsprout = $('<img src="../img/bellsprout.png">').addClass('pokeImages');
  $(pokeChoice1).append($imgCharmander);
  $(pokeChoice2).append($imgFroakie);
  $(pokeChoice3).append($imgBellsprout);
  //adds specs of the pokemon choices
  const $specsCharmander = $('<ul><li>Pokétype: fire</li></ul><p>Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.</p>');
  const $specsFroakie = $('<ul><li>Pokétype: water</li></ul><p>It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.</p>')
  const $specsBellsprout = $('<ul><li>Pokétype: grass</li></ul><p>Prefers hot and humid places. It ensnares tiny insects with tis vines and devours them.</p>');
  $(pokeChoice1).append($specsCharmander);
  $(pokeChoice2).append($specsFroakie);
  $(pokeChoice3).append($specsBellsprout);
  //create 3 different event listeners for each pokemon choice.
  $(pokeChoice1).on('click', function() {
    alert('You picked Charmander! Prepare for Battle!');
    //trying to link the charmander object to this div.
    $(pokeChoice1).data(charmander);
    start();
  });
  $(pokeChoice2).on('click', function(){
    alert('You picked Froakie!');
  });
  $(pokeChoice3).on('click', function(){
    alert('You picked Bellsprout!');
  });
}

})

class Pokemon {
  constructor (name, level, poketype){
    this.name = name;
    this.level = level;
    this.xp = 5;
    this.poketype = poketype;
    this.accuracy = '';
    this.hp = 100;
    this.coin = 300;
  }
  getAccuracy(){ //this will give all pokes a randomly generated accuracy between .5 and .10.
    this.accuracy = Math.random() * (.7 - .4) + .4;
    console.log(this.accuracy);
  }
  attack(wildPoke){
    if(this.poketype === "water"){
      if(Math.random() < this.accuracy){
        wildPoke.hp -= 22;
        console.log('Water gun was v effective, ' + wildPoke.name + ' loses 22 hp');
        if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
          console.log('Water gun was very effective. ' + wildPoke.name + ' fainted.');
          alert('You have won this battle');
          this.coin +=325;
        }
        else {
          console.log('ya missed fool');
        }
      }
    }
    else if (this.poketype === "grass"){
      if(Math.random() < this.accuracy){
        wildPoke.hp -= 22;
        console.log('Razor leaf was v effective, ' + wildPoke.name + ' loses 22 hp');
        if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
          console.log('Razor leaf was very effective. ' + wildPoke.name + ' fainted.');
          alert('You have won this battle');
          this.coin +=325;
        }
        else {
          console.log(this.name + ' missed.');
        }
      }
    }
    else if (this.poketype === "fire"){
      if(Math.random() < this.accuracy){
        wildPoke.hp -= 22;
        console.log('Fireball was v effective, ' + wildPoke.name + ' loses 22 hp');
        if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
          console.log('Fireball was very effective. ' + wildPoke.name + ' fainted.');
          alert('You have won this battle');
          this.coin +=325;
        }
        else {
          console.log(this.name + ' missed.');
        }
      }
    }
    else if (this.poketype === "electric"){
      if(Math.random() < this.accuracy){
        wildPoke.hp -= 22;
        console.log('lightning strike was v effective, ' + wildPoke.name + ' loses 22 hp');
        if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
          console.log('lightning strike was very effective. ' + wildPoke.name + ' fainted.');
          alert('You have won this battle');
          this.coin +=325;
        }
        else {
          console.log(this.name + ' missed.');
        }
      }
    }
  }
}

//creating all the different pokemon.
const pikachu = new Pokemon("pikachu", 1, "electric");
const charmander = new Pokemon("charmander", 1, "fire");
const snortle = new Pokemon("snortle", 1, "grass");
const froakie = new Pokemon("froakie", 1, "water");
const bellsprout = new Pokemon("bellsprout", 1, "grass");




const start = () => {
  alert('battle started')
  charmander.getAccuracy();
   charmander.attack(snortle);
}
// pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);
