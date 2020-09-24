"use strict";

function initMap(){

  let target = document.getElementById("target");
  let map;
  let marker;
  let infoWindow;
  let tokyo = {lat : 35.681167, lng : 139.767052};

  map = new google.maps.Map(target, {
    center : tokyo,
    zoom : 16
    // disableDefaultUI : true,
    // clickableIcons : false  // click無効化
  });

  //infoWindow = new google.maps.InfoWindow({
  //  position:tokyo,
  //  content : "hello!"
  //});
  //infoWindow.open(map);
  

  map.addListener("click", e => {
    //map.setCenter({lat :e.latLng.lat(), lng :e.latLng.lng()});
    //this.panTo(e.latLng);

    marker = new google.maps.Marker({
      position : {lat :e.latLng.lat(), lng :e.latLng.lng()},
      map : map,
      //title : e.latLng.toString(),
      //animation : google.maps.Animation.BOUNCE
      animation : google.maps.Animation.DROP
    });

    infoWindow = new google.maps.InfoWindow({
      position:tokyo,
      content : e.latLng.toString()
    });

    
     marker.addListener("click", () => {
      //marker.setMap(null);
      infoWindow.open(map, marker);
    });
  });

  

  // marker表示
  //marker = new google.maps.Marker({
  //  position : tokyo,
  //  map : map,
  //  title : "Tokyo!",
  //  icon : {
  //    url : "icon.png",
  //    scaledSize : new google.maps.Size(24, 24)
  //  },
  //  //animation : google.maps.Animation.BOUNCE
  //  animation : google.maps.Animation.DROP
  //});


}