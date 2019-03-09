const wakeDog = (dogName, dogBreed) => {
  return `Wake ${dogName} the ${dogBreed}`;
}
const leashDog = (dogName, dogBreed) => {
  return `Leash ${dogName} the ${dogBreed}`;
}

const walkToPark = (dogName, dogBreed) => {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

const throwFrisbee = (dogName, dogBreed) => {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

const walkHome = (dogName, dogBreed) => {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

const unleashDog = (dogName, dogBreed) => {
  return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = (dogName, dogBreed) => {
  let myDay = [];
  for (const action of routine) myDay.push(action(dogName, dogBreed));
  return myDay;
}