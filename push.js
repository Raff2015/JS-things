const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2 ~ This method is more easier
cities.forEach(function(city) {
    console.log(city);
});

// Same as method 3 but with more stuff
let numberOfTimesRan = 0;
cities.forEach(function(city, index) {
    numberOfTimesRan++;
    console.log(index, city.toLowerCase());
});
console.log(numberOfTimesRan);