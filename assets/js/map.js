$(document).ready(function() {

  var marker;
  var geocoder = new google.maps.Geocoder();
  var myLatLng = new google.maps.LatLng(51.0486, -114.0708);
  var mapOptions = {
    center: myLatLng,
    zoom: 10,
    draggable: false,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false
  };

  var map = new google.maps.Map($("#map").get(0), mapOptions);
  var address = "2500 University Dr NW, Calgary, AB T2N 1N4";
  geocoder.geocode({ address: address}, function(results, status) {
    // Check If Status is OK
    if (status == google.maps.GeocoderStatus.OK) {
      // Add marker
      marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map
      });

      // Reset Center and Zoom to the Geocoded Location
      map.setCenter(results[0].geometry.location);
      map.setZoom(12);

      // Add Info Window
      var infoWindow = new google.maps.InfoWindow({
        content: "<b>" + address + "</b>"
      });

      // Show Info Window
      infoWindow.open(map, marker);
    } else {
      alert(status);
    }

  });
});
