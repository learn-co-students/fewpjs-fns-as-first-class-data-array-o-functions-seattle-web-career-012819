function wakeDog(dogName, dogBreed) {
   `Wake ${dogName} the ${dogBreed}`
   console.log(`Wake ${dogName} the ${dogBreed}`);
   return `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(dogName, dogBreed) {
   `Leash ${dogName} the ${dogBreed}`
   console.log(`Leash ${dogName} the ${dogBreed}`);
   return `Leash ${dogName} the ${dogBreed}`;
}
function walkToPark(dogName, dogBreed) {
   `Walk to the park with ${dogName} the ${dogBreed}`
   console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
   return `Walk to the park with ${dogName} the ${dogBreed}`;
}
function throwFrisbee(dogName, dogBreed) {
   `Throw the frisbee for ${dogName} the ${dogBreed}`
   console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
   return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
function walkHome(dogName, dogBreed) {
   `Walk home with ${dogName} the ${dogBreed}`
   console.log(`Walk home with ${dogName} the ${dogBreed}`);
   return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName, dogBreed) {
   `Unleash ${dogName} the ${dogBreed}`
   console.log(`Unleash ${dogName} the ${dogBreed}`);
   return `Unleash ${dogName} the ${dogBreed}`;
}
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
   let answer = []
   for (let i = 0; i < routine.length; i++){
      answer.push(routine[i](dogName, dogBreed));
   }
   return answer 
}
