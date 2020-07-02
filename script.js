var map;

	function cebuMap()
	{
		var a = 10.315699,
			b = 123.885437,
			diff = 0.0033;
	  
	  
		var options = {
			center: {lat: a, lng: b},
			zoom: 16
		};
		
		var contentString = ;
		
		var infowindow =  new google.maps.InfoWindow
			({
				content: contentString
			});
			
		map = new google.maps.Map(document.getElementById('map'), options);
		
//Resto markers		
		var markers = 
		[
			{
				coords:{lat:10.3161922,lng:123.8837693},
				content:'<h1>Cebu Original Lechon Belly - One Pavilion Mall Banawe</h1>'
			},
			{
				coords:{lat:10.3151045,lng:123.881159},
				content:'<h1>Sachi Authentic Japanese Ramen And Okonomiyaki</h1>'
			},
			{
				coords:{lat:10.3158016,lng:123.8837304},
				content:'<h1>Kuzina Guadalupe</h1>'
			}
		];
//infowindow
		marker.addListener('click', function() 
			{
				infowindow.open(map, marker);
			});
// Loop through markers
    for(var i = 0;i < markers.length;i++)
	{
// Add marker
		addMarker(markers[i]);
    }

// Add Marker Function
	function addMarker(props)
		{
			var marker = new google.maps.Marker
				({
					position:props.coords,
					map:map,
//icon:props.iconImage
				});
// Check for customicon
			if(props.iconImage)
				{
// Set icon image
					marker.setIcon(props.iconImage);
				}
// Check content
			if(props.content)
			{
				var infoWindow = new google.maps.InfoWindow
			({
				content:props.content
			});
				marker.addListener('click', function()
			{
				infoWindow.open(map, marker);
			});
			}
		}
//rectangle map
	var polygonCoordinates = [
    { lat: a - diff, lng: b - diff },
    { lat: a + diff, lng: b - diff },
    { lat: a + diff, lng: b + diff },
    { lat: a - diff, lng: b + diff },
	];

	var polygon = new google.maps.Polygon
		({
			map: map,
			paths: polygonCoordinates,
			strokeColor: 'blue',
			fillColor: 'blue',
			fillOpacity: 0.4,
			draggable: true,
			editable: true
		});
	
	google.maps.event.addListener(polygon.getPath(), 'set_at', function() 
		{
			logArray(polygon.getPath());
		});
	
	google.maps.event.addListener(polygon.getPath(), 'insert_at', function() 
		{
			logArray(polygon.getPath());
		});
	}  

function logArray (array) {
  var vertices = [];

  for (var i = 0; i < array.getLength(); i++) {
    vertices.push({
      lat: array.getAt(i).lat(),
      lng: array.getAt(i).lng()
    });
  }

  console.log(vertices);
 /*compute distance(?)
	var center = map.getCenter();
	var markerLatLng = marker.getPosition();
	var distance = google.maps.geometry.spherical.computeDistanceBetween(center, markerLatLng);
*/
	}