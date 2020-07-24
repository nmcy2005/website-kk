//leaflet map on disclaimer site

let map = L.map("mapid").setView([52.96648659667741, 10.572296977043152], 12);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9lGDyW1A8L98aOcwGh0R",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  }
).addTo(map);

let marker = L.marker([52.96648659667741, 10.572296977043152]).addTo(map);

marker.bindPopup("Wir sind hier!").openPopup();
