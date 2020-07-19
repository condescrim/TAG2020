//map
var mymap = L.map('mapid').setView([9.917363, -84.102550], 16);
var marker = L.marker([9.917363, -84.102550]).addTo(mymap);
marker.bindPopup("<b>Taller de Artesanías German</b>").openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
//map