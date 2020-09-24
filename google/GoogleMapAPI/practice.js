"use strict";


const target = document.getElementById("target");

// class List{
//   constructor(){
//     this.address;
//     this.latlng;

   
//   }
  
//   setAddress(address){
//     this.address = address;
//   }
//   setLatlng(latlng){
//     this.latlng = latlng;
//   }

//   showMarker(){
//     this.marker = new google.maps.Marker({
//       position : this.latlng,
//       map : map
//     });
//     infoWindow = new google.maps.InfoWindow({
//       position : this.latlng,
//       content : this.address
//     });
  
//     this.marker.addListener("click", () => {
//       infoWindow.open(map, this.marker);
//     });
//   }

//   showList(){
//     const li = document.createElement("li");
//     this.li.append(address);
//     document.querySelector("ul").append(this.li);
//   }
// }
let list = [];
let map;
let marker;
let infoWindow;
let center;

function initMap(){

  //現在の場所情報取得
  if (!navigator.geolocation) {
    alert('Geolocation not supported');
    return;
  }
  navigator.geolocation.getCurrentPosition(function(position) {

    map = new google.maps.Map(target, {
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

  // 住所検索latlng取得
  const geocoder = new google.maps.Geocoder();
  document.getElementById("insert").addEventListener("click", () => {
    
    let address = document.getElementById("address").value;

    geocoder.geocode({
      address : address
    }, (result, status) => {
      if (status !== "OK") {
        alert("Failed" + status);
        return;
      }

      if (result[0]) {
        map = new google.maps.Map(target, {
          center:result[0].geometry.location,
          zoom : 15
        });

        list.push({
          address : address,
          latlng : result[0].geometry.location
        });
        
        // list.setAddress(address);
        // list.setLatlng(result[0].geometry.location);
        // list.showMarker();
        // list.showList();
        showMarker(list);
        showList(address, result[0].geometry.location);
        console.log(result[0].geometry.location);
      
      } else {
        alert("No results found");
        return;
      }
    });
  });
}

function showMarker(list){

  list.forEach(list => {
    marker = new google.maps.Marker({
      position : list.latlng,
      map : map
    });
    infoWindow = new google.maps.InfoWindow({
      position : list.latlng,
      content : list.address
    });
  
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });

}

function showList(address, latlng){
  console.dir(latlng);
  const li = document.createElement("li");
  li.append(address);
  document.querySelector("ul").append(li);
}



if(document.querySelector("li")){
  document.querySelector("ul > li").addEventListener("click", () => {
    alert("adsf");
    console.log(this);
    
  });
}