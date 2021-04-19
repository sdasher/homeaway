//Population
// function getLabelValues(input_id, min, max){
//     var val=$(input_id).val();
//     if (val != null && val.split(" - ").length==2 ) {
//         min = $(input_id).val().split(" - ")[0];
//         max = $(input_id).val().split(" - ")[1];
//     }
//     return [min, max];
// }

function getLabelValues(val, min, max){

    if (val != null && val.split(" - ").length==2 ) {
        min = val.split(" - ")[0];
        max = val.split(" - ")[1];
    }
    return [min, max];
}

$("#slider1").slider({
    range: true,
    min: 541,
    max: 14506494,
    values: getLabelValues($('#sliderLabel1').val(), 541, 14506494),
    slide: function (event, ui) {
         $("#sliderLabel1").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel1").val($("#slider1").slider("values", 0) +
    " - " + $("#slider1").slider("values", 1));


//%White
$("#slider2").slider({
    range: true,
    min: 12, max: 99,
    values: getLabelValues($('#sliderLabel2').val(), 12, 99),
    slide: function (event, ui) {
        $("#sliderLabel2").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel2").val($("#slider2").slider("values", 0) +
    " - " + $("#slider2").slider("values", 1));

//%Black
$("#slider3").slider({
    range: true,
    min: 0,
    max: 82,
    values: getLabelValues($('#sliderLabel3').val(), 0, 82),
    slide: function (event, ui) {
        $("#sliderLabel3").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel3").val($("#slider3").slider("values", 0) +
    " - " + $("#slider3").slider("values", 1));

//%LatinX
$("#slider4").slider({
    range: true,
    min: 0,
    max: 49,
    values: getLabelValues($('#sliderLabel4').val(), 0, 49),
    slide: function (event, ui) {
        $("#sliderLabel4").val(ui.values[0] + " - " + ui.values[1]);
    }
});
$("#sliderLabel4").val($("#slider4").slider("values", 0) +
    " - " + $("#slider4").slider("values", 1));

//%Asian
$("#slider5").slider({
    range: true,
    min: 0,
    max: 29,
    values: getLabelValues($('#sliderLabel5').val(), 0, 29),
    slide: function (event, ui) {
        $("#sliderLabel5").val(ui.values[0] + " - " + ui.values[1]);
    }
});
$("#sliderLabel5").val($("#slider5").slider("values", 0) +
    " - " + $("#slider5").slider("values", 1));

//MedianAge
$("#slider6").slider({
    range: true,
    min: 22.6,
    max: 62,
    values: getLabelValues($('#sliderLabel6').val(), 22, 63),
    slide: function (event, ui) {
        $("#sliderLabel6").val(ui.values[0] + " - " + ui.values[1]);

    }
});
$("#sliderLabel6").val($("#slider6").slider("values", 0) +
    " - " + $("#slider6").slider("values", 1));

//%GOP
$("#slider7").slider({
    range: true,
    min: 9,
    max: 92,
    values:getLabelValues($('#sliderLabel7').val(), 8, 93),
    slide: function (event, ui) {
        $("#sliderLabel7").val(ui.values[0] + " - " + ui.values[1]);

    }
});

$("#sliderLabel7").val($("#slider7").slider("values", 0) +
    " - " + $("#slider7").slider("values", 1));


//%Dem
$("#slider8").slider({
    range: true,
    min: 4.6, max: 87.6,
    values: getLabelValues($('#sliderLabel8').val(), 4, 88),
    slide: function (event, ui) {
        $("#sliderLabel8").val(ui.values[0] + " - " + ui.values[1]);

    }
});

$("#sliderLabel8").val($("#slider8").slider("values", 0) +
    " - " + $("#slider8").slider("values", 1));

//Congregation per 1000 People
$("#slider9").slider({
    range: true,
    min: 0,
    max: 11,
    values: getLabelValues($('#sliderLabel9').val(), 0, 11),
    slide: function (event, ui) {
        $("#sliderLabel9").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel9").val($("#slider9").slider("values", 0) +
    " - " + $("#slider9").slider("values", 1));

//PopSqMi
$("#slider10").slider({
    range: true,
    min: 0,
    max: 73032,
    values: getLabelValues($('#sliderLabel10').val(), 0, 73032),
    slide: function (event, ui) {
        $("#sliderLabel10").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel10").val($("#slider10").slider("values", 0) +
    " - " + $("#slider10").slider("values", 1));

//PC Income
$("#slider11").slider({
    range: true,
    min: 10388,
    max: 76592,
    values: getLabelValues($('#sliderLabel11').val(), 10388, 76592),
    slide: function (event, ui) {
        $("#sliderLabel11").val(ui.values[0] + " - " + ui.values[1]);

    }
});
$("#sliderLabel11").val($("#slider11").slider("values", 0) +
    " - " + $("#slider11").slider("values", 1));

//REnt PErcent Income
$("#slider12").slider({
    range: true,
    min: 9,
    max: 51,
    values: getLabelValues($('#sliderLabel12').val(), 9, 51),
    slide: function (event, ui) {
        $("#sliderLabel12").val(ui.values[0] + " - " + ui.values[1]);

    }
});
$("#sliderLabel12").val($("#slider12").slider("values", 0) +
    " - " + $("#slider12").slider("values", 1));

//% college grad
$("#slider13").slider({
    range: true,
    min: 0,
    max: 46,
    values: getLabelValues($('#sliderLabel13').val(), 0, 46),
    slide: function (event, ui) {
        $("#sliderLabel13").val(ui.values[0] + " - " + ui.values[1]);
    }

});

$("#sliderLabel13").val($("#slider13").slider("values", 0) +
    " - " + $("#slider13").slider("values", 1));


// % Unemp
$("#slider14").slider({
    range: true,
    min: 0,
    max: 15,
    values: getLabelValues($('#sliderLabel14').val(), 0, 15),
    slide: function (event, ui) {
        $("#sliderLabel14").val(ui.values[0] + " - " + ui.values[1]);

    }
});

$("#sliderLabel14").val($("#slider14").slider("values", 0) +
    " - " + $("#slider14").slider("values", 1));

//Natural Amenities
$("#slider15").slider({
    range: true,
    min: -6.1,
    max: 11.2,
    values: getLabelValues($('#sliderLabel15').val(), -6.1, 11.2),
    slide: function (event, ui) {
        $("#sliderLabel15").val(ui.values[0] + " - " + ui.values[1]);

    }
});

$("#sliderLabel15").val($("#slider15").slider("values", 0) +
    " - " + $("#slider15").slider("values", 1));


//Social Capital
$("#slider16").slider({
    range: true,
    min: -4,
    max: 22,
    values: getLabelValues($('#sliderLabel16').val(), -4, 22),
    slide: function (event, ui) {
        $("#sliderLabel16").val(ui.values[0] + " - " + ui.values[1]);
    }
});

$("#sliderLabel16").val($("#slider16").slider("values", 0) +
    " - " + $("#slider16").slider("values", 1));
//Math
$("#slider17").slider({
    range: true,
    min: -3.5,
    max: 3.5,
    values: getLabelValues($('#sliderLabel17').val(), -3.5, 3.5),
    slide: function (event, ui) {
        $("#sliderLabel17").val(ui.values[0] + " - " + ui.values[1]);

    }
});
$("#sliderLabel17").val($("#slider17").slider("values", 0) +
    " - " + $("#slider17").slider("values", 1));
//ELA
$("#slider18").slider({
    range: true,
    min: -4.5,
    max: 2.5,
    values: getLabelValues($('#sliderLabel18').val(), -4.5, 2.5),
    slide: function (event, ui) {
        $("#sliderLabel18").val(ui.values[0] + " - " + ui.values[1]);
    }
});
$("#sliderLabel18").val($("#slider18").slider("values", 0) +
    " - " + $("#slider18").slider("values", 1));
