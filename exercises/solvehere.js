const data = {
    planets: [
      {
        id: 'uranus',
        name: 'Uranus',
        isPlanet: true,
        mass: { massValue: 8.68127, massExponent: 25 },
        vol: { volValue: 6.833, volExponent: 13 },
        gravity: 8.87,
        avgTemp: 76,
        moonsCount: 27,
        moons: [
          'Ariel',     'Umbriel',  'Titania',
          'Obéron',    'Miranda',  'Cordélia',
          'Ophélie',   'Bianca',   'Cressida',
          'Desdémone', 'Juliette', 'Portia',
          'Rosalinde', 'Belinda',  'Puck',
          'Caliban',   'Sycorax',  'Prospero',
          'Setebos',   'Stephano', 'Trinculo',
          'Francisco', 'Margaret', 'Ferdinand',
          'Perdita',   'Mab',      'Cupid'
        ]
      },
      {
        id: 'neptune',
        name: 'Neptune',
        isPlanet: true,
        mass: { massValue: 1.02413, massExponent: 26 },
        vol: { volValue: 6.254, volExponent: 13 },
        gravity: 11.15,
        avgTemp: 55,
        moonsCount: 14,
        moons: [
          'Triton',   'Néreïde',
          'Naïade',   'Thalassa',
          'Despina',  'Galatée',
          'Larissa',  'Protée',
          'Halimède', 'Psamathée',
          'Sao',      'Laomédie',
          'Néso',     'Hippocampe'
        ]
      },
      {
        id: 'jupiter',
        name: 'Jupiter',
        isPlanet: true,
        mass: { massValue: 1.89819, massExponent: 27 },
        vol: { volValue: 1.43128, volExponent: 15 },
        gravity: 24.79,
        avgTemp: 165,
        moonsCount: 80,
        moons: [
          'Io',            'Europe',      'Ganymède',
          'Callisto',      'Amalthée',    'Himalia',
          'Élara',         'Pasiphaé',    'Sinopé',
          'Lysithéa',      'Carmé',       'Ananké',
          'Léda',          'Thébé',       'Adrastée',
          'Métis',         'Callirrhoé',  'Thémisto',
          'Mégaclité',     'Taygété',     'Chaldéné',
          'Harpalyké',     'Kalyké',      'Iocasté',
          'Erinomé',       'Isonoé',      'Praxidyké',
          'Autonoé',       'Thyoné',      'Hermippé',
          'Aitné',         'Eurydomé',    'Euanthé',
          'Euporie',       'Orthosie',    'Spondé',
          'Calé',          'Pasithée',    'Hégémone',
          'Mnémé',         'Aoedé',       'Thelxinoé',
          'Arché',         'Callichore',  'Hélicé',
          'Carpo',         'Eukéladé',    'Cyllène',
          'Coré',          'Hersé',       'S/2003 J 2',
          'Euphémé',       'S/2003 J 4',  'Eiréné',
          'S/2003 J 9',    'S/2003 J 10', 'S/2003 J 12',
          'Philophrosyne', 'S/2003 J 16', 'S/2003 J 18',
          'S/2003 J 19',   'S/2003 J 23', 'Dia',
          'S/2010 J 1',    'S/2010 J 2',  'S/2011 J 1',
          'S/2011 J 2',    'S/2017 J 1',  'S/2016 J 1',
          'Valétudo',      'S/2017 J 2',  'S/2017 J 3',
          'Pandia',        'S/2017 J 5',  'S/2017 J 6',
          'S/2017 J 7',    'S/2017 J 8',  'S/2017 J 9',
          'Ersa',          'S/2003 J 24'
        ]
      },
      {
        id: 'mars',
        name: 'Mars',
        isPlanet: true,
        mass: { massValue: 6.41712, massExponent: 23 },
        vol: { volValue: 1.6318, volExponent: 11 },
        gravity: 3.71,
        avgTemp: 210,
        moonsCount: 2,
        moons: [ 'Phobos', 'Deïmos' ]
      },
      {
        id: 'mercure',
        name: 'Mercure',
        isPlanet: true,
        mass: { massValue: 3.30114, massExponent: 23 },
        vol: { volValue: 6.083, volExponent: 10 },
        gravity: 3.7,
        avgTemp: 440
      },
      {
        id: 'saturne',
        name: 'Saturne',
        isPlanet: true,
        mass: { massValue: 5.68336, massExponent: 26 },
        vol: { volValue: 8.2713, volExponent: 14 },
        gravity: 10.44,
        avgTemp: 134,
        moonsCount: 82,
        moons: [
          'Mimas',       'Encelade',    'Téthys',
          'Dioné',       'Rhéa',        'Titan',
          'Hypérion',    'Japet',       'Phœbé',
          'Janus',       'Epiméthée',   'Hélène',
          'Télesto',     'Calypso',     'Atlas',
          'Prométhée',   'Pandore',     'Pan',
          'Ymir',        'Paaliaq',     'Tarvos',
          'Ijiraq',      'Suttungr',    'Kiviuq',
          'Mundilfari',  'Albiorix',    'Skathi',
          'Erriapo',     'Siarnaq',     'Thrymr',
          'Narvi',       'Méthone',     'Pallène',
          'Pollux',      'Daphnis',     'Aegir',
          'Bebhionn',    'Bergelmir',   'Bestla',
          'Farbauti',    'Fenrir',      'Fornjot',
          'Hati',        'Hyrrokkin',   'Kari',
          'Loge',        'Skoll',       'Surtur',
          'Anthé',       'Jarnsaxa',    'Greip',
          'Tarqeq',      'Égéon',       'S/2004 S 7',
          'S/2004 S 12', 'S/2004 S 13', 'S/2004 S 17',
          'S/2006 S 1',  'S/2006 S 3',  'S/2007 S 2',
          'S/2007 S 3',  'S/2009 S 1',  'S/2004 S 22',
          'S/2004 S 21', 'S/2004 S 20', 'S/2004 S 23',
          'S/2004 S 24', 'S/2004 S 25', 'S/2004 S 26',
          'S/2004 S 27', 'S/2004 S 28', 'S/2004 S 29',
          'S/2004 S 30', 'S/2004 S 31', 'S/2004 S 32',
          'S/2004 S 33', 'S/2004 S 34', 'S/2004 S 35',
          'S/2004 S 36', 'S/2004 S 37', 'S/2004 S 38',
          'S/2004 S 39'
        ]
      },
      {
        id: 'earth',
        name: 'Earth',
        isPlanet: true,
        mass: { massValue: 5.97237, massExponent: 24 },
        vol: { volValue: 1.08321, volExponent: 12 },
        gravity: 9.8,
        avgTemp: 288,
        moonsCount: 1,
        moons: [ 'La Lune' ]
      },
      {
        id: 'venus',
        name: 'Vénus',
        isPlanet: true,
        mass: { massValue: 4.86747, massExponent: 24 },
        vol: { volValue: 9.2843, volExponent: 11 },
        gravity: 8.87,
        avgTemp: 737
      }
    ],
  
    asteroids: [
      { name: '1 Ceres', discoveryYear: 1801, orbitalPeriod: 1681.63 },
      { name: '6 Hebe', discoveryYear: 1847, orbitalPeriod: 1380.373 },
      { name: '47171 Lempo', discoveryYear: 1999, orbitalPeriod: 91678 },
      { name: '762 Pulcova', discoveryYear: 1913, orbitalPeriod: 2049.475 },
      { name: '4179 Toutatis', discoveryYear: 1989, orbitalPeriod: 1463.14 },
      { name: '50000 Quaoar', discoveryYear: 2002, orbitalPeriod: 104347.575 },
      { name: '2867 Šteins', discoveryYear: 1969, orbitalPeriod: 1327.3582 },
      { name: '5 Astraea', discoveryYear: 1845, orbitalPeriod: 1507.279 },
      { name: '5145 Pholus', discoveryYear: 1992, orbitalPeriod: 33711 },
      { name: '4769 Castalia', discoveryYear: 1989, orbitalPeriod: 400.428 },
      { name: '624 Hektor', discoveryYear: 1907, orbitalPeriod: 4358.521 },
      { name: '216 Kleopatra', discoveryYear: 1880, orbitalPeriod: 1707 },
      { name: '3753 Cruithne', discoveryYear: 1986, orbitalPeriod: 364.019 },
      { name: '3 Juno', discoveryYear: 1804, orbitalPeriod: 1593.926 },
      { name: '10 Hygiea', discoveryYear: 1849, orbitalPeriod: 2029.776 },
      { name: '21 Lutetia', discoveryYear: 1852, orbitalPeriod: 1387.902 },
      { name: '253 Mathilde', discoveryYear: 1885, orbitalPeriod: 1572.491 },
      { name: '7 Iris', discoveryYear: 1847, orbitalPeriod: 1346.628 },
      { name: '433 Eros', discoveryYear: 1898, orbitalPeriod: 643.219 },
      { name: '90377 Sedna', discoveryYear: 2003, orbitalPeriod: 4154395 },
      { name: '10199 Chariklo', discoveryYear: 1997, orbitalPeriod: 23084 },
      { name: '87 Sylvia', discoveryYear: 1866, orbitalPeriod: 2381.639 },
      { name: '90482 Orcus', discoveryYear: 2004, orbitalPeriod: 89606 },
      { name: '5335 Damocles', discoveryYear: 1991, orbitalPeriod: 14880.9 },
      { name: '8 Flora', discoveryYear: 1847, orbitalPeriod: 1192.956 },
      { name: '2060 Chiron', discoveryYear: 1977, orbitalPeriod: 18429 },
      { name: '5261 Eureka', discoveryYear: 1990, orbitalPeriod: 686.829 },
      { name: '588 Achilles', discoveryYear: 1906, orbitalPeriod: 4320.803 },
      { name: '28978 Ixion', discoveryYear: 2001, orbitalPeriod: 90717 },
      { name: '9 Metis', discoveryYear: 1848, orbitalPeriod: 1346.815 },
      { name: '7066 Nessus', discoveryYear: 1993, orbitalPeriod: 44561 },
      { name: '25143 Itokawa', discoveryYear: 1998, orbitalPeriod: 556.38 },
      { name: '10370 Hylonome', discoveryYear: 1995, orbitalPeriod: 44561 },
      { name: '45 Eugenia', discoveryYear: 1857, orbitalPeriod: 1638.654 },
      { name: '(308933) 2006 SQ372', discoveryYear: 2006, orbitalPeriod: 11800000 },
      { name: '2 Pallas', discoveryYear: 1802, orbitalPeriod: 1685.927 },
      { name: '8405 Asbolus', discoveryYear: 1995, orbitalPeriod: 27796 },
      { name: '20000 Varuna', discoveryYear: 2000, orbitalPeriod: 103440 },
      { name: '4 Vesta', discoveryYear: 1807, orbitalPeriod: 1325.886 },
      { name: '243 Ida', discoveryYear: 1884, orbitalPeriod: 1767.564 },
      { name: '951 Gaspra', discoveryYear: 1916, orbitalPeriod: 1199.479 },
      { name: '15760 Albion', discoveryYear: 1992, orbitalPeriod: 105757 },
      { name: 'Arrokoth', discoveryYear: 2014, orbitalPeriod: 107847 },
      { name: '101955 Bennu', discoveryYear: 1999, orbitalPeriod: 436.604 }
    ],
  };

  //solve here with quokka 
//   function getPlanetNames(data) {
//     // Your code goes here...
//     return data.planets.map((planet) => planet.name);
//   }
//   console.log(getPlanetNames(data)) 

//   function getAsteroidNames(data) {
//     // Your code goes here...
//     return data.asteroids.map((asteroid) => asteroid.name);
//   }
//   console.log(getAsteroidNames(data)) 

// function getAllAverageTemperatures(data) {
//     // Your code goes here...
//     return data.planets.map((planet) => planet.avgTemp);
//   }

//   console.log(getAllAverageTemperatures(data))

// function getPlanetsWithLowGravity(data) {
//     // Your code goes here...
//     //return data.planets.map((planet) => planet.name); 
//     return data.planets.filter((planet) => planet.gravity < 10)
//     .map((planet) => planet.name);
//   }

//   console.log(getPlanetsWithLowGravity(data))
// function getPlanetsWithMassValue(data, number) {
//     // Your code goes here...
//     return data.planets.filter((planet) => planet.mass.massValue >= number)
//     .map((planet) => planet.name);
//   }

//   console.log(getPlanetsWithMassValue(data, 3));
// function getAsteroidsDiscoveredAfterYear(data, year) {
//     // Your code goes here...
//     return data.asteroids.filter((asteroid) => asteroid.discoveryYear > year)
//         .map((asteroid) => asteroid.name);
//   }

//   console.log(getAsteroidsDiscoveredAfterYear(data, 2000))

// function getPlanetsNamesWithMoons(data) {
//     // Your code goes here...
//     return data.planets.filter((planet) => planet.moons)
//     .map((planet) => planet.name);
//   }

//   console.log(getPlanetsNamesWithMoons(data))

// function findPlanetNameByMoon(data, moonName) {
//     // Your code goes here...

//     return data.planets.filter((planet) => planet.moons)
//     .find((planet) => planet.moons.includes(moonName)).name
//   }

//   console.log(findPlanetNameByMoon(data, 'Titan'));

// function getEarthData(data) {
//     // Your code goes here...
//     return data.planets.find((planet) => planet.name === 'Earth')
// }
//   console.log(getEarthData(data))

// function getAsteroidDataByName(data, asteroidName) {
//     // Your code goes here...
//     return data.asteroids.find((asteroid) => asteroid.name === asteroidName)
    
//   }
//   console.log(getAsteroidDataByName(data, 'Arrokoth'))
// function lowMoonsPlanets(data) {
//     // Your code goes here...
//     return data.planets.filter((planet) => planet.moonsCount < 10 || !planet.moonsCount)
//     .map((planet) => planet.name);
// }
// console.log(lowMoonsPlanets(data))
// function allPlanetsMoonsCount(data) {
    // Your code goes here...
//     const moonsCount = data.planets.filter((planet) => planet.moonsCount)
//     .reduce((acc, val)  =>  val.moonsCount + acc,0)
//     return moonsCount
//   }
//   console.log(allPlanetsMoonsCount(data))
// function getAveragePlanetsTemperature(data) {
//     // Your code goes here...
//     const getTemps = data.planets.filter((planet) => planet.avgTemp)
//     .reduce((acc, val) => val.avgTemp + acc ,0)

//     const avgTemps = getTemps / data.planets.length

//     console.log(getTemps)
//     console.log(avgTemps)

//     return avgTemps

//   }
// console.log(getAveragePlanetsTemperature(data));

// function getOrbitalPeriodsSum(data) {
//     // Your code goes here...
//     return data.asteroids.filter((asteroid) => asteroid.orbitalPeriod)
//     .reduce((acc, val) => val.orbitalPeriod + acc ,0)
//   }

//   console.log((getOrbitalPeriodsSum(data)))

// function getPlanetsWithNoMoons(data) {
//     // Your code goes here...
//     return data.planets.filter((planet) => !planet.moonsCount)
//     .map((planet) => planet.name)
//   }

//   console.log(getPlanetsWithNoMoons(data))

// function filter(array, callback) {
//     let returnArray = [];
  
//     for (let element of array) {
//       // Only if the callback that we apply returns something truthy, does it get pushed into the new array
//       if (callback(element)) {
//         returnArray.push(element);
//       }
//     }
  
//     return returnArray;
//   }

//   function find(array, callback) {
//     // Your code goes here...
//     for (let i = 0 ; i < array.length ; i++) {
//         if (callback(array[i], i , array)) {
//             return array[i];
//         }
//     }
//     return undefined
//   }
// export function minBy(array, cb) {
//     // Your code goes here...
//     if(array.length === 0) {
//       return undefined
//     }
//     return array.reduce(function(lowest, current) {
//       const currentVal = cb(current);
//       const lowestVal = cb(lowest);
      
//       return currentVal < lowestVal ? current : lowest;
//     }
//     )
//   }
  
  
//   export function maxBy(array, cb) {
//     // Your code goes here...
//     if(array.length === 0) {
//       return undefined
//     }
//     return array.reduce(function(highest, current) {
//       const currentVal = cb(current);
//       const highestVal = cb(highest);
      
//       return currentVal > highestVal ? current : highest;
//     }
//     )
  
//   }





// function getGreatestDiscoveryYear(data) {
//     // Your code goes here...
//     // feel free to import your `maxBy` or `minBy` methods from previous lessons
//     let array = data.asteroids
//       array
//       function findMostFrequentYear(array) {
//           const counts = {}
//           let maxCount = 0;
//           let maxVal;
//           for(let val of array) {
//               if (!counts[val]) {
//                   counts[val] = 1;
//               } else {
//                   counts[val]++;
//               }
//               if (counts[val] > maxCount) {
//                   maxCount = counts[val];
//                   maxVal = val;
//               }
//           }
//           return maxVal.discoveryYear;
//       }
//       return findMostFrequentYear(array)
//     }
// function getGreatestDiscoveryYear(data) {
//     // Your code goes here...
//     // feel free to import your `maxBy` or `minBy` methods from previous lessons
//     let array = data.asteroids
//     array
//     function findMostFrequentYear(array) {
//         const frequency = array.reduce((acc, val) => {
//             acc[val] = acc[val] ? acc[val] + 1 : 1;
//             return acc;
//         }, {});

//         let maxCount = 0;
//         let maxValue = null;

//         for(const [key, value] of Object.entries(frequency)) {
//             if (value > maxCount) {
//                 maxCount = value;
//                 maxValue = key;
//             }
//         }
//         return maxValue
//     }
//     return findMostFrequentYear(array)
//   }
//   console.log(getGreatestDiscoveryYear(data))

// function getGreatestDiscoveryYear(data) {
//     const discoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);
//     const countByYear = discoveryYears.reduce((acc, year) => {
//       acc[year] = (acc[year] || 0) + 1;
//       return acc;
//     }, {});
//     const maxCount = Math.max(...Object.values(countByYear));
//     const maxCountYear = Object.keys(countByYear).find(year => countByYear[year] === maxCount);
//     return parseInt(maxCountYear);
// }

//   console.log(getGreatestDiscoveryYear(data))

function getGreatestDiscoveryYear(data) {
    const countsByYear = {};
  
    // Iterate over the asteroids array and count the occurrences of each year
//

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
console.log(getGreatestDiscoveryYear(data))