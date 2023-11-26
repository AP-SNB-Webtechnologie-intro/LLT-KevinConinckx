$(document).ready(function () {
  // Map Code
  var map = L.map('map').setView([51.23009, 4.41616], 17);
        
  // Add a tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Add a marker
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker!');
    // bepaal de rechthoek rondom het gebouw van AP
  let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
  // kleur de rechthoek in met de rode AP-kleur
  L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
  // plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
  let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
  apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();
  })