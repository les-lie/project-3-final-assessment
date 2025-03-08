document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    if (slides.length > 0) {
      setInterval(nextSlide, 3000);
    }
  });
  
  function initMap() {
    const mapOptions = {
      center: { lat: 41.8781, lng: -87.6298 },
      zoom: 12,
      zoomControl: true
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