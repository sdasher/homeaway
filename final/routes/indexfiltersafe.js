var express = require('express'); // require Express
var router = express.Router(); // setup usage of the Express router engine

/* PostgreSQL and PostGIS module and connection setup */
const { Client, Query } = require('pg')

// Setup connection
var username = "postgres" // sandbox username
var password = "admin" // read only privileges on our table
var host = "localhost:5432"
var database = "geog778" // database name
var conString = "postgres://"+username+":"+password+"@"+host+"/"+database; // Your Database Connection

// Set up your database query to display GeoJSON
var county_query = "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((gid, name, state_name)) As properties FROM countyshapes As lg) As f) As fc";


module.exports = router;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;


/* GET Postgres JSON data */
router.get('/data', function (req, res) {
    var client = new Client(conString);
    client.connect();
    var query = client.query(new Query(county_query));
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        res.send(result.rows[0].row_to_json);
        res.end();
    });
});


/* GET the map page */
router.get('/', function(req, res) {
    var client = new Client(conString); // Setup our Postgres Client
    client.connect(); // connect to the client
    var query = client.query(new Query(county_query)); // Run our Query
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    // Pass the result to the map page
    query.on("end", function (result) {
        //console.log(trailsData);
        var data = result.rows[0].row_to_json; // Save the JSON as variable data
        res.render('index', {
            title: "" +
                "Express API", // Give a title to our page
            jsonData: data
        });
    });
})

/* GET the filtered by name page */
router.get('/filter*', function (req, res) {
    // var filtername1 = req.query.filtername1;
    // var filtervalue1min = req.query.filtervalue1min;
    // var filtervalue1max = req.query.filtervalue1max;
    // var filtername2 = req.query.filtername2;
    // var filtervalue2min = req.query.filtervalue2min;
    // var filtervalue2max = req.query.filtervalue2max;
    // filtername=filtername.toProperCase();
    // console.log(filtername);
    // if (filtername.indexOf("--") > -1 || filtername.indexOf("'") > -1 || filtername.indexOf(";") > -1 || filtername.indexOf("/*") > -1 || filtername.indexOf("xp_") > -1){
    //   console.log("Bad request detected");
    //   res.redirect('/map');
    //   return;
    // } else
    console.log("Request passed");
    var filtername1 = 'rentpercentinc';
    var filtervalue1min = 25;
    var filtervalue1max = 30;

    var filter_query = `SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM
(SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((gid, name, state_name)) As properties FROM countyshapesmerge As lg 
WHERE lg.`+filtername1+` > ` +filtervalue1min+`AND lg.`+filtername1+` < `+filtervalue1max+`) As f) As fc`;

    console.log(filter_query);
    var client = new Client(conString);
    client.connect();
    var query = client.query(new Query(filter_query));
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        var data = result.rows[0].row_to_json;
        res.render('index', {
            title: "Express API",
            jsonData: data
        });
    });
})




