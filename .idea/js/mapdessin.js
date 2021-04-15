window.addEventListener("DOMContentLoaded", (event) => {
    //site montrant comment les dessins fonctionne
    //https://bl.ocks.org/danswick/d30c44b081be31aea483
    //insert data into postgis
    //https://www.bostongis.com/postgis_geomfromtext.snippet
    console.log("DOM entièrement chargé et analysé");

    const mymap = L.map('mapid', {drawControl: true}).setView([45.454, -73.667], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    //function to read geojson properties
    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.point_name && feature.properties.email) {
            layer.bindPopup(`<h3>POINT NAME</h3> ${feature.properties.point_name}<hr> <br>
                            <h3>EMAIL</h3> ${feature.properties.email}<hr><br>
                            <h3>DESCRIPTION</h3> ${feature.properties.description}<hr>`);
        }
    }

    let geodata;
    //posting data into postgis database
    const onPointMap = () => {
        fetch('https://tarek-bg.com/app/data').then((response) => {
            // The API call was successful!
            return response.json();
        }).then((data) => {
            // This is the JSON from our response
            if(geodata){
                mymap.removeLayer(geodata)
                let geojsondata = JSON.parse(data) //convert text into a JavaScript object
                //console.log(geojsondata)
                geodata = L.geoJSON(geojsondata, {
                    onEachFeature: onEachFeature
                })
                geodata.addTo(mymap)
            } else{
                let geojsondata = JSON.parse(data) //convert text into a JavaScript object
                console.log(geojsondata)
                geodata = L.geoJSON(geojsondata, {
                    onEachFeature: onEachFeature
                })
                geodata.addTo(mymap)
            }
        }).catch((err) => {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    }
    onPointMap();

    //refresh the map on click
    let refreshdata = document.getElementById('refresh')
    refreshdata.onclick = onPointMap

    // FeatureGroup is to store editable layers
    let drawnItems = new L.FeatureGroup();
    mymap.addLayer(drawnItems);

    mymap.on('draw:created', (e) => {

        // Each time a feature is created, it's added to the over arching feature group
        drawnItems.addLayer(e.layer);
    });

    // add scale in metric to the map
    L.control.scale({metric: true}).addTo(mymap);

    //import delete and export button and form button
    let deletepoint = document.getElementById('delete');
    let exportpoint = document.getElementById('export');
    let formappear = document.getElementById('maforme');
    let closeform = document.getElementById('close');

    //clear all layers on click
    deletepoint.onclick = (e) => {
        drawnItems.clearLayers();
    };

    //evrey time user add geometry the form input refresh to empty
    const refreshinputfield = () => {
        document.getElementById('fname').value = ""
        document.getElementById('email').value = ""
        document.getElementById('description').value = ""
    }

    //format geojson data (for the point) to be able to insert it in postgis table
    const formatPoint = (datapoint) => {
        let type = datapoint.features[0].geometry.type.toUpperCase()
        let longitude = datapoint.features[0].geometry.coordinates[0]
        let latitude = datapoint.features[0].geometry.coordinates[1]
        //console.log(type, longitude, latitude, longitude1, latitude1)
        document.getElementById('coord').value = `${type}(${longitude} ${latitude})`
    }

    //format geojson data (for the linestring) to be able to insert it in postgis table
    const formatLineString = (datalinestring) => {
        let type = datalinestring.features[0].geometry.type.toUpperCase()
        let longitude = datalinestring.features[0].geometry.coordinates[0][0]
        let latitude = datalinestring.features[0].geometry.coordinates[0][1]
        let longitude1 = datalinestring.features[0].geometry.coordinates[1][0]
        let latitude1 = datalinestring.features[0].geometry.coordinates[1][1]
        //console.log(type, longitude, latitude, longitude1, latitude1)
        document.getElementById('coord').value = `${type}(${longitude} ${latitude}, ${longitude1} ${latitude1})`
    }

    //format geojson data (for polygon) to be able to insert it in postgis table
    const formatPolygon = (polygondata) => {
        let listepoly = []
        polygondata.forEach(poly => poly.forEach(poly2 => listepoly.push(`${poly2[0]} ${poly2[1]}`)))
        document.getElementById('coord').value =`POLYGON((${listepoly.join(', ')}))`
    }

    //onclick render a form and get the coordinate of the selected element
    exportpoint.onclick = () => {
        // Extract GeoJson from featureGroup
        let data = drawnItems.toGeoJSON();
        console.log(data)
        //console.log(data.features[0])
        if(data.features.length){//if a geometry has been inserted
            if(formappear.style.display = "none"){
                if(data.features[0].geometry.type.toUpperCase() === 'LINESTRING'){
                    formatLineString(data)//we fire the linestring format
                    refreshinputfield()
                    formappear.style.display = "block";
                } else if(data.features[0].geometry.type.toUpperCase() === 'POINT'){
                    formatPoint(data)
                    refreshinputfield()
                    formappear.style.display = "block";
                } else if(data.features[0].geometry.type.toUpperCase() === 'POLYGON'){
                    formatPolygon(data.features[0].geometry.coordinates)
                    refreshinputfield()
                    formappear.style.display = "block";
                }
            }
        } else if(!data.features.length){
            alert('You have to add a geometry to the map to have the form displayed and to be able to save it to the database')
        }
    };

    //onclick of the button close the window form close
    closeform.onclick = () => {
        if(formappear.style.display = "block"){
            formappear.style.display = "none";
        }
    };

    //posting data into postgis database
    onSubmitPoint = () => {
        fetch('https://tarek-bg.com/app', {
            method: 'post',
            headers: {'Accept': 'application/json','content-type': 'application/json'},
            body: JSON.stringify({
                pointname: document.getElementById("fname").value,
                email: document.getElementById("email").value,
                description: document.getElementById("description").value,
                coordinates: document.getElementById("coord").value
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log('User: ', user)
                console.log('data.name', user.point_name)
                if(user.coordinates && user.point_name && user.email){
                    alert('data has been saved')
                } else {
                    alert(`Data has not been saved (You have this error: ${user})`)
                }
            })
    };

    let senddata = document.getElementById('send')
    senddata.onclick = onSubmitPoint
});