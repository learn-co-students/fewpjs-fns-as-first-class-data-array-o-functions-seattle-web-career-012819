'use strict';

const wakeDog = (a, b) => {
  return `Wake ${a} the ${b}`;
}

const leashDog = (a, b) => {
  return `Leash ${a} the ${b}`;
}

const walkToPark = (a, b) => {
  return `Walk to the park with ${a} the ${b}`;
}

const throwFrisbee = (a, b) => {
  return `Throw the frisbee for ${a} the ${b}`;
}

const walkHome = (a, b) => {
  return `Walk home with ${a} the ${b}`;
}

const unleashDog = (a, b) => {
  return `Unleash ${a} the ${b}`;
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

const exerciseDog = (dog, breed) => {
  return routine.map(fn => fn(dog, breed));
}