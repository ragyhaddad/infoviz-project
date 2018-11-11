
function update_map() {
	var here = "all";

	var menu = d3.select('#selection').node();

	var where = menu.options[menu.selectedIndex].value;

	if (where == "staten island") {
		map.flyTo([40.5795, -74.1502], 11.45);
	}
	else if (where == "bronx") {
		map.flyTo([40.8448, -73.8648], 11);
	}
	else if (where == "queens") {
		map.flyTo([40.67, -73.85], 11);
	}
	else if (where == "manhattan") {
		map.flyTo([40.7831, -73.9712], 11);
	}
	else if (where == "brooklyn") {
		map.flyTo([40.650002, -73.949997], 11);
	}
	else { 
		map.flyTo([40.7, -74.0], 10);
	}
if (where != here) {
	here = where;

}
console.log(here);
}
var where = "staten island";

//entire map of NYC with all boroughs
var map = L.map('map', {minZoom: 10}).setView([40.7, -74.0], 10);




//using mapbox to create the tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicmpwbGFjZTkiLCJhIjoiY2pudXB1anB6MGl6NTN3bDRqbXV4NjE4diJ9.tqO6ZW74jV8QvkcjJCP2TA'
}).addTo(map);
console.log(map);
 
//loads zip code geojson
d3.json('./data/nyc_zip_code.geojson', function(error, zip) {

//lays the pane of data over the tile and changes the color depending on the borough
	L.geoJson(zip, {
			style: function (feature) {
		if (feature.properties.borough == "Staten Island") {
			
			return {color: "#e7dbff"};
		}
		else if (feature.properties.borough == "Queens") {
			return {color: "#ffcc00"};
		}
		else if (feature.properties.borough == "Brooklyn") {
			return {color: "#0066ff"};
		}
		else if (feature.properties.borough == "Bronx") {
			return {color: "#ff0000"}
		}
		else {
			return {color: "#33cccc"}
		}
	}
}).bindPopup(function (layer) {
		return layer.feature.properties.postalcode;
	}).addTo(map);
});


//ajax api call 
$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: 'http://dogsofny.tk/search?{query}birthyear=2014&boro=manhattan&name=milo&gender=m',
		data: '{}',
		dataType: 'json',
		success: function(data) {
			dogs = data;


dogs.forEach(function(d){	
	d.LatLng = new L.LatLng(40.7, -74.0)
	});



//creat circles
for(var i=0; i<dogs.length;i++) {
	// console.log(dogs[i]["LatLng"]['lat']);
circle = new L.circle([dogs[i]["LatLng"]["lat"], dogs[i]["LatLng"]["lng"]], {
    color: 'purple',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
    pane: 'markerPane'
}).addTo(map).on('click', display_name);
}

function display_name(c) {
	var clicked = c.target;
	console.log(clicked);
	clicked.bindPopup("Hello there").openPopup();
}



		}
	})
});



//sees if we are at borough overview or zip code level
// if (where == "all") {

// //loads borough geojson
// d3.json('borough.geojson', function(error, borough) {

// //lays the pane of data over the tile and changes the color depending on the borough
// L.geoJson(borough, {
// 	style: function (feature) {
// 		if (feature.properties.borough == "Staten Island") {
// 			return {color: "#33cc33"};
// 		}
// 		else if (feature.properties.borough == "Queens") {
// 			return {color: "#ffcc00"};
// 		}
// 		else if (feature.properties.borough == "Brooklyn") {
// 			return {color: "#0066ff"};
// 		}
// 		else if (feature.properties.borough == "Bronx") {
// 			return {color: "#ff0000"}
// 		}
// 		else {
// 			return {color: "#33cccc"}
// 		}
// 	}
// }).bindPopup(function (layer) {
// 	return layer.feature.properties.borough; })
// 	.addTo(map);

// });
// }
// else {