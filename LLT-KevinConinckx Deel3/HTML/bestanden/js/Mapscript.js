$(document).ready(function () {
  // Map Code
  var map = L.map('map').setView([51.23009, 4.41616], 17);
        
  // Add a tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // marker toevoegen
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker!');
    // bepaal de rechthoek rondom het gebouw van AP
  let bounds = [[51.22985517302704, 4.413663749649849], [51.2307890172103, 4.415401821074747]];
  // kleur de rechthoek in met de rode kleur
  L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
  // plaatst een marker met als tekst "AP-Hogeschool" en eronder "Noorderplaats 2"
  let apMarker = L.marker([51.23025491440373, 4.41452742094432]).addTo(map);
  apMarker.bindPopup("<b>AP-Hogeschool</b><br>Noorderplaats 2").openPopup();
  })