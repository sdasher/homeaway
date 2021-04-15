console.log("slider ran");
$("#slider1").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
        // console.log(ui.values);
         $("#amount1").val(ui.values[0] + " - " + ui.values[1]);
    }
});
 console.log("slider.js Added to SLider 1. REady to add amount 1");
$("#amount1").val($("#slider1").slider("values", 0) +
    " - " + $("#slider1").slider("values", 1));

//
// $("#slider2").slider({
//     range: true,
//     min: 0, max: 500,
//     values: [200, 300],
//     slide: function (event, ui) {
//         $("#amount2").val(ui.values[0] + " - " + ui.values[1]);
//     }
// });
//
// $("#amount2").val($("#slider2").slider("values", 0) +
//     " - " + $("#slider2").slider("values", 1));
//
//
// $("#slider3").slider({
//     range: true,
//     min: 0,
//     max: 500,
//     values: [100, 300],
//     slide: function (event, ui) {
//         $("#amount3").val(ui.values[0] + " - " + ui.values[1]);
//     }
// });
//
// $("#amount3").val($("#slider3").slider("values", 0) +
//     " - " + $("#slider3").slider("values", 1));
//
//
// $("#slider4").slider({
//     range: true,
//     min: 100000,
//     max: 500000,
//     values: [150000, 300000],
//     slide: function (event, ui) {
//         $("#amount4").val("$" + ui.values[0] + " - $" + ui.values[1]);
//     }
// });
// $("#amount4").val("$" + $("#slider4").slider("values", 0) +
//     " - $" + $("#slider4").slider("values", 1));
//
//
// $("#slider5").slider({
//     range: true,
//     min: 0,
//     max: 500,
//     values: [75, 300],
//     slide: function (event, ui) {
//         $("#amount6").val(ui.values[0] + " - " + ui.values[1]);
//     }
// });
// $("#amount5").val($("#slider5").slider("values", 0) +
//     " - " + $("#slider5").slider("values", 1));
//
// $("#slider6").slider({
//     range: true,
//     min: 0,
//     max: 500,
//     values: [75, 300],
//     slide: function (event, ui) {
//         $("#amount6").val(ui.values[0] + " - " + ui.values[1]);
//     }
// });
// $("#amount6").val($("#slider6").slider("values", 0) +
//     " - " + $("#slider6").slider("values", 1));
