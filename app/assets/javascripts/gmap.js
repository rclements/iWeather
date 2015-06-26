var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();

function calcRoute() {
  var origin      = new google.maps.LatLng(41.850033, -87.6500523);
  var destination = new google.maps.LatLng(42.850033, -85.6500523);
  var request = {
        origin:      origin,
        destination: destination,
        travelMode:  google.maps.TravelMode.DRIVING
    };
  directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
    });
}

calcRoute();

var handler = Gmaps.build('Google');
handler.buildMap({ internal: {id: 'directions'}}, function(){
  markers = handler.addMarkers([{
    "lat": 36.1667,
    "lng": -86.7833,
    "picture": {
      //"url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
      "width":  36,
      "height": 36
    },
    "infowindow": "Cloudy in the morning, then off and on rain showers during the afternoon hours. High around 70F. Winds ENE at 5 to 10 mph. Chance of rain 50%."
    },

    {"lat": 33.5250,
    "lng": -86.8130,
    "picture": {
      //"url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
      "width":  36,
      "height": 36
    },
    "infowindow": "Showers early becoming a steady light rain later in the day. High 68F. Winds WSW at 5 to 10 mph. Chance of rain 70%."
    },
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
  directionsDisplay.setMap(handler.getMap());
});


//function buildMap(lat, lon, weather) {
//  handler = Gmaps.build('Google');
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//     markers = handler.addMarkers([{
//       "lat": lat,
//       "lng": lon,
//       "picture": {
//         "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
//         "width":  36,
//         "height": 36
//       },
//       "infowindow": weather
//       }
//     ]);
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
//  });
//}
