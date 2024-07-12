 //distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  const scuberHq = 42
  const distance = Math.abs(someValue - scuberHq); 
  return(distance)
}

//distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. Use your distanceFromHqInBlocks function to help return the correct value here. Try something like this:

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
const feetPerBlock = 264; 
const distanceInFeet = distanceFromHqInBlocks(someValue) * feetPerBlock; 
return(distanceInFeet)
distanceFromHqInFeet(50)
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
//distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.

function distanceTravelledInFeet(start, destination) {
const distanceFromHqInBlocks = Math.abs(start - destination);
const feetPerBlock = 264; 
return distanceTravelledInFeet = distanceFromHqInBlocks * feetPerBlock;    
    //returns the number of feet traveled
} 
//calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
        // Calculate distance in feet
        const distance = Math.abs(destination - start) *264;
    
        // Handle cases based on distance
        if (distance <= 400) {
            return 0; // First 400 feet are free
        } else if (distance > 400 && distance <= 2000) {
            // Calculate fare for distance between 400 and 2000 feet
            const fare = (distance - 400) * 0.02;
            return fare;
        } else if (distance > 2000 && distance < 2500) {
            // Flat fare for distance between 2000 and 2500 feet
            return 25;
        } else if (distance >= 2500) {
            // Distance over 2500 feet is not allowed
            return 'cannot travel that far';
        }
}
    