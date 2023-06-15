// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks) {
    //returns the number of blocks given a value
    return Math.abs(distanceInBlocks - 42);
  }

  function distanceFromHqInFeet(distanceInBlocks) {
    return Math.abs(distanceFromHqInBlocks(distanceInBlocks)*264);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    //return Math.abs(distanceInBlocks*264);
    //let distanceInFeet = distanceFromHqInBlocks(distanceInBlocks);
    //return Math.abs(distanceInFeet*)
  } 

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs((start-destination)*264);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let x=distanceTravelledInFeet(start, destination);
    if ( x<400){
        let fare = x*0;
        return fare;
    } else if (x>=400 && x<=2000){
        let fare = (x-400)*0.02;
        return fare;
    } else if (x>2000 && x<2500){
        let fare = 25;
        return fare;
    }
    else {
        return 'cannot travel that far'
    }
  }