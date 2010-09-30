var gm = google.maps;
var map, geocoder, router, renderer;

function init() {

	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(60, 25),	// Location of Helsinki
		mapTypeId: gm.MapTypeId.ROADMAP,
		streetViewControl: true
	}
	
	map = new gm.Map(document.getElementById("map"), mapOptions);
	geocoder = new gm.Geocoder();
	router = new gm.DirectionsService();
	
	renderer = new gm.DirectionsRenderer();
	renderer.setMap(map);
	renderer.setPanel(document.getElementById('instructions'));
}

function scroll(address) {
	var place;
	
	geocoder.geocode({'address': address}, function (result, status) {
		if (status == gm.GeocoderStatus.OK) {
			place = result[0].geometry.location;
			map.panTo(place);
			map.setZoom(16);
			
			marker = {
				position: place,
				map: map
			}
			
			new gm.Marker(marker);
		}
	});
}

function calcRoute() {
	var travelOptions = {
		'destination': document.getElementById('destination').value,
		'origin': document.getElementById('origin').value,
		'region': 'fi',
		'travelMode': gm.DirectionsTravelMode.DRIVING
	};

	router.route(travelOptions, function (result, status) {
		if (status == gm.DirectionsStatus.OK) {			
			renderer.setDirections(result);
		}
	});
}

function test() {
	scroll(document.getElementById('destination').value);
}