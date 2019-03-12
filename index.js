var wakeDog = function(dogName="Byron", dogBreed="poodle"){
 console.log(`Wake ${dogName} the ${dogBreed}`);
 return  `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName="Byron", dogBreed="poodle"){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName, dogBreed){
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName, dogBreed){
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName, dogBreed){
    return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName, dogBreed){
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

var exerciseDog = function(dogName, dogBreed){
    let allFunctions = []
    for (let i =0; i < routine.length; i++){
        allFunctions.push(routine[i](dogName,dogBreed));
    }
    return allFunctions
}