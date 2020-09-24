"use strict";

function initMap(){

  var target = document.getElementById("target");
  var geocoder = new google.maps.Geocoder();
  
  // Geocoding : Address -> LatLng
  // document.getElementById("search").addEventListener("click", () => {
  //   geocoder.geocode({
  //     address : document.getElementById("address").value
  //   }, (result, status) => {
  //     if (status !== "OK") {
  //       alert("Failed" + status);
  //       return;
  //     }

  //     //result[0].geometry.location
  //     if (result[0]) {
  //       console.log(result);
  //       new google.maps.Map(target, {
  //         center:result[0].geometry.location,
  //         zoom:15
  //       })
  //     } else {
  //       alert("No results found");
  //       return;
  //     }
  //   });

  // });

  // Reverse Geocoding : LatLng -> Address
  // var map;
  // map = new google.maps.Map(target, {
  //   center : {
  //     lat : 35.681167,
  //     lng : 139.767052
  //   },
  //   zoom : 15
  // });

  // map.addListener("click", e => {
  //   geocoder.geocode({
  //     location : e.latLng
  //   }, (result, status) => {
  //     if(status !== "OK"){
  //       alert("Failed" + status);
  //       return;
  //     }

  //     if(result[0]){
  //       console.log(result);
  //       new google.maps.Marker({
  //         position : e.latLng,
  //         map : map,
  //         title : result[0].formatted_address
  //       });
  //     }else{
  //       alert("No results found");
  //       return;
  //     }
  //   });
  // });
  
}