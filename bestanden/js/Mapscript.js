 // maps initializeren
 var map1 = L.map('map1').setView([51.23009, 4.41616], 17);
 var map2 = L.map('map2').setView([51.21946074580089, 4.403564440611807], 20);
 var map3 = L.map('map3').setView([51.21338168343034, 4.393313693994591], 17);

 // Add a tile layer to each map
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map1);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map2);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map3);


