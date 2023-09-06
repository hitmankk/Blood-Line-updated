
let map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(20.5937, 78.9629),
    zoom: 7,
 });





 const contentString = "Hello this side Vansh! Contact me for donating or urgent need of AB+ Bllod group (Contact no. - 7004****88)";

const infowindow = new google.maps.InfoWindow({
  content: contentString,
  ariaLabel: "Donor Details",
});


addMarker( new google.maps.LatLng(21.1458, 79.0882) , "Raju Rastogi (A +ve)");
addMarker( new google.maps.LatLng(23.7897304, 86.42641119999999), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(23.7846737
,  86.4224551), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(23.7880937, 86.418098), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(23.742628, 86.4111374), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(18.7960378,  73.7973623), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(18.7990378,  73.8973623), "Rancho Das ChanChad (AB +ve)"), "";
addMarker( new google.maps.LatLng(18.8960378,  73.9973623), "Rancho Das ChanChad (AB +ve)"), "";


function addMarker(coords, name){
const marker = new google.maps.Marker({
    position:coords,
    icon:'marker.png',
    title: name,
    map: map,

  })

  marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
  });
});

}   

};

