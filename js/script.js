function initMap() {
    const mapOptions = {
      center: { lat: 41.8781, lng: -87.6298 }, // Chicago
      zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }