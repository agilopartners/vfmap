<?php
  include 'config.php';
  include 'opendb.php';

  $query = "SELECT offer_ads.id, offer_ads.room_types, ad_gmaps_locations.lat, ad_gmaps_locations.lng ".
           "FROM offer_ads, ad_gmaps_locations ".
           "WHERE offer_ads.id = ad_gmaps_locations.offer_ad_id ".
  	       "ORDER BY id DESC LIMIT 10";
  	       
  $result = mysql_query($query) or die(mysql_error());
  
  while($row = mysql_fetch_assoc($result))
  {
      echo "id:{$row['id']} " .
           "room_types: {$row['room_types']} ".
           "lat:{$row['lat']} " .
           "lng:{$row['lng']} <br />";
  } 

  include 'closedb.php';
?>