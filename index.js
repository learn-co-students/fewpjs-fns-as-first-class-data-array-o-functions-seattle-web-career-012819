function wakeDog(dogName, dogBreed) {
  const dogMessage = `Wake ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

function leashDog(dogName, dogBreed) {
  const dogMessage = `Leash ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

function walkToPark(dogName, dogBreed) {
  const dogMessage = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

function throwFrisbee(dogName, dogBreed) {
  const dogMessage = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

function walkHome(dogName, dogBreed) {
  const dogMessage = `Walk home with ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

function unleashDog(dogName, dogBreed) {
  const dogMessage = `Unleash ${dogName} the ${dogBreed}`
  console.log(dogMessage);
  return dogMessage;
}

const routine = [
  wakeDog, 
  leashDog, 
  walkToPark, 
  throwFrisbee, 
  walkHome, 
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  let resultArr = [];
  for (let i = 0; i < routine.length; i++) {
    let currentFunction = routine[i];
    resultArr.push(currentFunction(dogName, dogBreed));
  }
  return resultArr;
}