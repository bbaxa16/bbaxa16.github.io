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
  getAccuracy(){ //this will give all pokes a randomly generated accuracy between the number 5 and 10.
    Math.ceil(5);
    Math.floor(10);
    this.accuracy = Math.floor(Math.random()* (10-5)) + 5;
    console.log(this.accuracy);
  }
}

const pikachu = new Pokemon("pikachu", 1, "electric");

pikachu.getAccuracy();
console.log(pikachu);
