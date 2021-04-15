
    var myData = !{JSON.stringify(jsonData)};
    console.log("Map runs");
// Create variable to hold map element, give initial settings to map
    var map = L.map('map', {center: [39.359967212949016, -111.6519904633779], zoom: 4});

// Add tiles from Mapbox
    var accessToken = 'pk.eyJ1Ijoic2Rhc2hlciIsImEiOiJja2VwMzJidTkwb2Y0MnpwbmNzZzNwMXBtIn0.yISZa2w-PKhRAEaAyIl8ew';
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
            tileSize: 512,
            zoomOffset: -1,
            attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    var layerControl = L.control.layers(null, null, {position: 'topright'}).addTo(map);

// Add JSON to map
    L.geoJson(myData, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.f2);
        }
    }).addTo(map);
// create the sidebar instance and add it to the map
    var sidebar = L.control.sidebar({container: 'sidebar'})
        .addTo(map)
        .open('home');
// add panels dynamically to the sidebar
    sidebar
        .addPanel({
            id: 'countystats',
            tab: '<i class="fa fa-home"></i>',
            title: 'County Stats',
        })
        .addPanel({
            id: 'sliders',
            tab: '<i class="fa fa-filter"></i>',
            title: 'Filters',
        })
// add a tab with a click callback, initially disabled
// be notified when a panel is opened
    sidebar.on('content', function (ev) {
        switch (ev.id) {
            case 'autopan':
                sidebar.options.autopan = true;
                break;
            default:
                sidebar.options.autopan = false;
        }
    });
