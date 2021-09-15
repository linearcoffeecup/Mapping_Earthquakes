// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      0.0, 0.0
    ],
    zoom: 3
  });
/* 
  Airports:
JFK : [40.641766, -73.780968],
AUS : [30.1974292, -97.6663058],
YYZ : [-79.630556, 43.677223]

   */

  let line = [
    [40.641766, -73.780968],
    [30.1974292, -97.6663058],
    [-79.630556, 43.677223]
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow",
  weight : 4,
  opacity : 0.5
}).addTo(map);

/* 
L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color: "yellow"
 }).addTo(map); */

/* // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapbox_key
}); */

/* 
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: mapbox_key
  });
 */

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapbox_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);