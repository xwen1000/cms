var center = {lat: latitude, lng: longtitude};
var directionsService;
var directionsDisplay;
var map;
var marker;
function initMap() {
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: zoom,
    center: center,
    mapTypeId: mapType
  });
  directionsDisplay.setMap(map);
  if(showMarker){
    marker = new google.maps.Marker({
      position: center,
      icon: markerImage
    });
    marker.setMap(map);
  }

  if(document.getElementById('directions-button')){
    var onClickHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('directions-button').addEventListener('click', onClickHandler);
  }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showDirections);
  } else {
      alert("Geolocation is not supported by this browser.");
      return;
  }
}
function showDirections(origin){
  directionsService.route({
    origin: origin.coords.latitude + ',' + origin.coords.longitude,
    destination: center.lat + ',' + center.lng,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      alert('Directions request failed due to ' + status);
    }
  });
}
