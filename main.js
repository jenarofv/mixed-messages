const locations = ['Mexico City', 'Quintana Roo', 'Tlaxcala'];
const seasons = ['summer', 'autumn', 'winter', 'spring'];
const sensations = ['hot', 'cold', 'humid', 'dry'];
const comparisons = [ 'see turtles wearing turtlenecks', 'see penguins on the street', 'fry an egg on the sidewalk', 'drink a gallon of water', 'never dry your clothes at all'];


const loc = locations[Math.floor(Math.random() * 3)];
const season = seasons[Math.floor(Math.random() * 4)];
const sensation = sensations[Math.floor(Math.random() * 4)];
const comparison =  comparisons[Math.floor(Math.random() * 5)];

console.log(`In ${loc}, ${season} is so ${sensation} that you can ${comparison}.`);
