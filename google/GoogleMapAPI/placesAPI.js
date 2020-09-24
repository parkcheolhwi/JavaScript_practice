'use strict';
function initMap() {

  var target = document.getElementById('target');
  // var map;
  // var tokyo = {lat: 35.681167, lng: 139.767052};
  // var service;

  // map = new google.maps.Map(target, {
  //   center: tokyo,
  //   zoom: 15
  // });

  // document.getElementById('search').addEventListener('click', function() {
  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch({
  //     location: tokyo,
  //     radius: '500',
  //     name: document.getElementById('keyword').value
  //   }, function(results, status) {
  //     var i;
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       console.log(results);
  //       for (i = 0; i < results.length; i++) {
  //         new google.maps.Marker({
  //           map: map,
  //           position: results[i].geometry.location,
  //           title: results[i].name
  //         });
  //       }
  //     } else {
  //       alert('Failed: ' + status);
  //       return;
  //     }
  //   });
  // });

  //Geolocation
  if (!navigator.geolocation) {
    alert('Geolocation not supported');
    return;
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log( position.coords.latitude+","+position.coords.longitude);
    new google.maps.Map(target, {
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      zoom: 15
    });
  }, function() {
    alert('Geolocation failed!');
    return;
  });
  
}