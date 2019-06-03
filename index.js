
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function wakeDog(dogName, dogBreed){
  const str = `Wake ${dogName} the ${dogBreed}`
  console.log(str);
  return str
};
function leashDog(dogName, dogBreed){
  const str = `Leash ${dogName} the ${dogBreed}`
  console.log(str);
  return str
};
function walkToPark(dogName, dogBreed){
  const str = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(str);
  return str
};
function throwFrisbee(dogName, dogBreed){
  const str = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(str);
  return str;
};
function walkHome(dogName, dogBreed){
  const str = `Walk home with ${dogName} the ${dogBreed}`
  console.log(str);
  return str;
};
function unleashDog(dogName, dogBreed){
  const str = `Unleash ${dogName} the ${dogBreed}`
  console.log(str);
  return str
};

function exerciseDog(dogName, dogBreed){
  let answer = []
  for(let i = 0; i < routine.length; i++){
    answer.push(routine[i](dogName, dogBreed));
  }
  return answer
}
