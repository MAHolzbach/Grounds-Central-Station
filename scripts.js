/*jshint esversion: 6 */

//Vid or poster for home page header.
const vidChecker = () => {
  if($(window).width() < 1000) {
    $('video').attr('autoplay', false);
  } else {
    $('video').attr('autoplay', true);
  }
};

$(window).resize(vidChecker);
$(document).ready(vidChecker);

//Menu text adjustment for mobile.
const resizer = () => {
  if($(window).width() < 1000) {
    $('.rightItems').removeClass('has-text-right');
  } else {
    $('.rightItems').addClass('has-text-right');
  }
};

$(window).resize(resizer);
$(document).ready(resizer);

//Image text display toggle.
$('.imgDiv').click(function() {
  $(this).find('.imgText').animate({
    opacity: 'toggle'
  });
});

//Google map.
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

//Contact form.
(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=872791&sec_hash=aedeb5a9eec&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));
