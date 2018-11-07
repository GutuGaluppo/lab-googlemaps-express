// window.onload = () => {
const center = {
  lat: 52.5059909,
  lng: 13.3710617
};

const markers = []

console.log("TEST");


const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: center
});

getRestaurants()

// let center = {
//   lat: undefined,
//   lng: undefined
// }; 

function getRestaurants() {
  axios.get("http://localhost:3001/restaurants/api")
    .then(response => {
      placeRestaurants(response.data.restaurants);
    })
    .catch(error => {
      next(error);
    })
}

function placeRestaurants(restaurants) {
  restaurants.forEach(function (restaurant) {
    const center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: restaurant.name
    });
    markers.push(pin);
  });
}
// };

