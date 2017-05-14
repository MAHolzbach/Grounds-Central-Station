function initMap() {
        var groundCentralStation = {lat: 38.751510, lng: -77.471822};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: {lat: 38.752, lng: -77.472}
        });
        var marker = new google.maps.Marker({
          position: groundCentralStation,
          map: map
        });
      }

(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=872791&sec_hash=aedeb5a9eec&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));
