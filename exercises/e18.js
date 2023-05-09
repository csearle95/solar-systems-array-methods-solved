/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const countsByYear = {};
  
    // Iterate over the asteroids array and count the occurrences of each year
    for (let i = 0; i < data.asteroids.length; i++) {
      const year = data.asteroids[i].discoveryYear;
      if (countsByYear[year]) {
        countsByYear[year]++;
      } else {
        countsByYear[year] = 1;
      }
    }
  
    let greatestYear = null;
    let greatestCount = 0;
  
    // Find the year with the greatest count
    for (const year in countsByYear) {
      if (countsByYear[year] > greatestCount) {
        greatestYear = year;
        greatestCount = countsByYear[year];
      }
    }
  
    return parseInt(greatestYear);
  }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
