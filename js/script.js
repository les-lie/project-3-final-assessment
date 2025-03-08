function initMap() {
    const mapOptions = {
      center: { lat: 41.8781, lng: -87.6298 },
      zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    const marker = new google.maps.Marker({
      position: { lat: 41.8781, lng: -87.6298 },
      map: map,
      title: 'Chicago'
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: '<h3>Chicago</h3><p>A great city!</p>'
    });
    marker.addEventListener('click', () => {
      infoWindow.open(map, marker);
    });
  }