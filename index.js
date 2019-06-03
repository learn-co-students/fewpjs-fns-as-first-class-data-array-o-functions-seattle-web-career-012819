function wakeDog(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(a, b){
  console.log(`Leash ${a} the ${b}`);
  return `Leash ${a} the ${b}`
}

function walkToPark (dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(a, b){
  console.log(`Throw the frisbee for ${a} the ${b}`);
  return `Throw the frisbee for ${a} the ${b}`
}

function walkHome(a, b){
  console.log(`Walk home with ${a} the ${b}`);
  return `Walk home with ${a} the ${b}`
}

function unleashDog(a, b){
  console.log(`Unleash ${a} the ${b}`);
  return `Unleash ${a} the ${b}`
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(a, b) {
  return routine.map(fn => fn(a, b))
  // for(let i =0; i < routine.length; i++){
  //    functionName = routine[i];
  //    return functionName(a,b)
  // }
}
