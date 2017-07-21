var geocoder;
var map;
var marker;

function initialize() {
    var latlng = new google.maps.LatLng(-26.8218106, -49.28007);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    marker.setPosition(latlng);
}

$(document).ready(function () {

    initialize();

    function carregarNoMapa(endereco) {
        geocoder.geocode({'address': endereco + ', Brasil', 'region': 'BR'}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);

                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        })
    }

    $("#btnEndereco").click(function () {
        if ($(this).val() != "")
            carregarNoMapa($("#txtEndereco").val());
    })

    $("#txtEndereco").autocomplete({
        source: function (request, response) {
            geocoder.geocode({'address': request.term + ', Brasil', 'region': 'BR'}, function (results, status) {
                response($.map(results, function (item) {
                    return {
                        label: item.formatted_address,
                        value: item.formatted_address,
                        latitude: item.geometry.location.lat(),
                        longitude: item.geometry.location.lng()
                    }
                }));
            })
        },
        select: function (event, ui) {
            $("#txtLatitude").val(ui.item.latitude);
            $("#txtLongitude").val(ui.item.longitude);
        }
    });

    $("form").submit(function (event) {
        event.preventDefault();

        var endereco = $("#txtEndereco").val();
        var latitude = $("#txtLatitude").val();
        var longitude = $("#txtLongitude").val();

        alert("Endereço: " + endereco + "\nLatitude: " + latitude + "\nLongitude: " + longitude);
    });



});