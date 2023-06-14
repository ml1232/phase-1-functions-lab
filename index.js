function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters location
    return Math.abs(pickupLocation - hqLocation); // Calculates the absolute difference between pickup location and headquarters location
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Call the distanceFromHqInBlocks function to get the number of blocks
    const feetPerBlock = 264; // Number of ft in each block
    return blocks * feetPerBlock; // Calc. the distance in ft
  }

  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination); // Calc. the number of blocks traveled
    const feetPerBlock = 264; // Number of ft in each block
    return blocks * feetPerBlock; // Calculate distance in ft
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Calculate distance in ft
    let fare;
  
    if (distance <= 400) {
      fare = 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02; // Price is 2 cents per foot after first 400 ft
    } else if (distance > 2000 && distance < 2500) {
      fare = 25; // Flat fare of $25 for a distance over 2000 feet & under 2500 feet
    } else {
      return "cannot travel that far"; // Return error message for rides over 2500 ft
    }
  
    return fare;
  }
