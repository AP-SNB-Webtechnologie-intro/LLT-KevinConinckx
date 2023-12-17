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
      // bepaal de rechthoek rondom het gebouw
    let bounds = [[51.21969728754972, 4.408860758785862], [51.2307890172103, 4.415401821074747]];
    // kleur de rechthoek in met de rode kleur
    L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
  // plaatst een marker met als tekst "Sport Nutrition Antwerp" en eronder "Lange Nieuwstraat 46"
  let apMarker = L.marker([51.219649770978236, 4.4090219704648295]).addTo(map);
    apMarker.bindPopup("<b>Sport Nutrition Antwerp</b><br>Lange Nieuwstraat 46").openPopup();
    })
