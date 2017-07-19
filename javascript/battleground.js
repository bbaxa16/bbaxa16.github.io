$(()=>{ //window onload


})

class Pokemon {
  constructor (name, level, poketype){
    this.name = name;
    this.level = level;
    this.xp = 5;
    this.poketype = poketype;
    this.accuracy = '';
    this.health = 100;
  }
  getAccuracy(){ //this will give all pokes a randomly generated accuracy between .5 and .10.
    this.accuracy = Math.random() * (.5 - .10) + .5;
  }
}

const pikachu = new Pokemon("pikachu", 1, "electric");

pikachu.getAccuracy();
console.log(pikachu);
