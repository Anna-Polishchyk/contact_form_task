function initMap() {

  const uluru = { lat: 43.452256573661295, lng: -80.5144019252694 },
        popupContent = '<div class="map__infowindow">'+
            '<p class="company-name" > Voodoo</p >'+
                '<p class="company-adress">137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br>Ukraine</p>'+
                    '<ul class="contacts__list list">'+
                        '<li class="contacts--item">'+
                            '<a href="tel:1-800-480-9597" class="contacts--link link">1-800-480-9597</a>'+
                        '</li>'+
                        '<li class="contacts__item contacts-item__mail">'+
                            '<a href="mailto:info@voodoo.com" class="contacts--link link">'+
                                'info@voodoo.com </a>'+
                        '</li>'+
                    '</ul>'+
                '</div>',
    markerImage = "./images/marker-image.png",
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
      disableDefaultUI: true,
    }),

    marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: markerImage,
  });


//   marker.addListener('click', function () {
//       infowindow.open(map, marker);
//   });

  infowindow = new google.maps.InfoWindow({
    content: popupContent,
  });

    infowindow.open(map, marker);

    $.getJSON("./map-styles.json", function (data) {
        map.setOptions({ styles: data });
    });
}


window.initMap = initMap;
