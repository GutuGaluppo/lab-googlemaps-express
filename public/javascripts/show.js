const center = {
  lat: 52.5059909,
  lng: 13.3710617
};

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: center
});



getRestaurant()

function getRestaurant() {
  const restaurantId = window.location.href.substr(-24)
  axios.get("http://localhost:3001/restaurants/api/" + restaurantId)
    .then(response => {
      placeRestaurant(response.data.restaurant);
    })
    .catch(error => {
      console.log(error);

      // next(error);
    })
}

function placeRestaurant(restaurant) {
  const center = {
    lat: restaurant.location.coordinates[1],
    lng: restaurant.location.coordinates[0]
  };
  const pin = new google.maps.Marker({
    position: center,
    map: map,
    title: restaurant.name
  });
  // markers.push(pin);
}
