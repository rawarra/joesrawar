;(function($) {
    "use strict";
    
    
    /*----------------------------------------------------*/
    /*  Google Map
    /*----------------------------------------------------*/        
    function initialize() {
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,
            scaleControl: false,
            center: new google.maps.LatLng(22.952635, 91.282526)
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation:google.maps.Animation.BOUNCE,
            icon: 'image/map.png',
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    
})(jQuery)
