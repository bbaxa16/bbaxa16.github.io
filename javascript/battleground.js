$(()=>{ //window onload

  class Pokemon {
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
    getAccuracy(){ //this will give all pokes a randomly generated accuracy between .5 and .10.
      this.accuracy = Math.random() * (.7 - .4) + .4;
      console.log(this.accuracy);
    }
    attack(wildPoke){
      if(this.poketype === "water"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          alert('Water gun was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
            alert('Water gun was very effective. ' + wildPoke.name + ' fainted. You have won this battle!' );
            alert('You have won this battle');
            this.coin +=325;
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
          if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
            alert('Razor leaf was very effective. ' + wildPoke.name + ' fainted. You have won this battle!');
            this.coin +=325;
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
          if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
            alert('Fireball was very effective. ' + wildPoke.name + ' fainted. You have won this battle!');
            this.coin +=325;
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
          if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
            alert('lightning strike was very effective. ' + wildPoke.name + ' fainted. You have won this battle');
            this.coin +=325;
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
  const squirtle = new Pokemon("snortle", 1, "water", $('<img src="../img/squirtle.png">').addClass('pokeImages'));
  const froakie = new Pokemon("froakie", 1, "water", $('<img src="../img/froakie.png">').addClass('pokeImages'));
  const bellsprout = new Pokemon("bellsprout", 1, "grass", $('<img src="../img/bellsprout.png">').addClass('pokeImages'));

  //create an array of all the pokemon
  const pokeArr = [pikachu,charmander,squirtle,froakie,bellsprout];

  //create a function that will randomly select our opponent.
  const choosePoke = () => {
      let randoPoke = pokeArr[Math.floor(Math.random()* pokeArr.length)];
      return randoPoke;
  }
  //
  const start = () => {
    let randoPoke = choosePoke();
    $('#battle').remove();
    alert('Wild ' + randoPoke.name + ' appeared!');
    $('.container').append(randoPoke.img);
    //create an attack button that will first get our accuracy, then attack the enemy poke. they will then attack too.
    const $attackButton = $('<button>A T T A C K</button>');
    $('.pokeChoice').append($attackButton);
    // charmander.getAccuracy();
    //  charmander.attack(randoPoke);
    //  randoPoke.getAccuracy();
    //  randoPoke.attack(charmander);
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
  //$(pokeChoice1).attr('id', 'pokeChoice1'); why wont it give it an id

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
    $('#header').children().eq(1).remove();
    const $battleButton = $('<button>Battle!</button>').attr('id', 'battle');
    $('.container').append($battleButton);
    $(pokeChoice2).remove();
    $(pokeChoice3).remove();
    $($battleButton).on('click', function(){
      start();
      $($battleButton).off('click');
    })
    //createModal(Charmander);
    //trying to link the charmander object to this div.
    //$(pokeChoice1).data(charmander);
    //$('.container').remove();
    // $(pokeChoice2).remove();
    // $(pokeChoice3).remove();
    // $(pokeChoice1).css('display:', 'center');
    //start();

  });
  $(pokeChoice2).on('click', function(){
    alert('You picked Froakie!');
  });
  $(pokeChoice3).on('click', function(){
    alert('You picked Bellsprout!');
  });
}

//createModal function
// const createModal = (name) => {
//   $('.container').remove();
//   name.innerText = name
//   $('#user-modal').append(name);

  // $('#user-modal').css('display','block');
  // $('#user-modal').append('<iframe src="https://giphy.com/embed/YzABsnRu6dM1a" width="480" height="382" frameBorder="0" allowFullScreen></iframe>').attr('id', 'charGif');



}) //close of window onload


// pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);
