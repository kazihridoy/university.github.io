    var map;
    $(document).ready(function(){
      var map = new GMaps({
        el: '#map',
        lat: 35.4675551,
        lng: -97.5514471,
        scrollWheel:false
      });

      GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        },
        always: function(){
          alert("Done!");
        }
      });
    });
