//var generateName = require('sillyname');

//user silly name to generate random names
import generateName from "sillyname";

var sillyName = generateName();
console.log(`Hi new name is: ${sillyName}.`);

//use superheroes to generate random superhero names
import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();
console.log(`I am ${name}!`);
