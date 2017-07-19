$(()=>{ //window onload

$('#ready').on('click', function(){
  pikachu.getAccuracy();
  pikachu.attack(snortle);
} )

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
    return this.accuracy;
  }
  attack(wildPoke){
    if(this.poketype === "water"){}
    else if (this.poketype === "grass"){}
    else if (this.poketype === "fire"){}
    else if (this.poketype === "electric"){
      if(Math.random() < this.accuracy){
        wildPoke.hp -= 22;
        console.log('lightning strike was v effective, ' + wildPoke.name + ' loses 22 hp');
        if(wildPoke.hp <= 0){ //need to add another function that will end this battle.
          console.log('lightning strike was very effective. ' + wildPoke.name + ' fainted.');
          alert('You have won this battle');
          this.coin +=325;
        }
      }
      else {
        console.log('ya missed fool');
      }
    }

    }
  }


const pikachu = new Pokemon("pikachu", 1, "electric");

const snortle = new Pokemon("snortle", 1, "grass");
// pikachu.getAccuracy();
// pikachu.attack(snortle);
// pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);pikachu.attack(snortle);
