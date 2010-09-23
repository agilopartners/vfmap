	var maps = google.maps;
	var geocoder, map, marker;

function init() {
	geocoder = new maps.Geocoder();

	var myOptions = {
		zoom: 8,
		center: new google.maps.LatLng(60, 25),	// Location of Helsinki
		mapTypeId: maps.MapTypeId.ROADMAP,
		streetViewControl: true
	}
			
	map = new maps.Map(document.getElementById("map"), myOptions);
}

function scroll(address) {	
	geocoder.geocode({address: address}, function(results, status) {
		if (status == maps.GeocoderStatus.OK) {
			place = results[0].geometry.location;
			map.panTo(place);
			map.setZoom(16);
			marker = new maps.Marker({position: place, map: map});
		}
	});	
}

function scrollMap() {
	scroll(document.getElementById('address').value);
}
