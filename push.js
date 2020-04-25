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

// method 2
cities.forEach(function(city) { //This method is more easier
    console.log(city);
});