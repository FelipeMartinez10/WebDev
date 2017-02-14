var contenedor = $('.primera-seccion');
contenedor.waypoint(
  function (direction)
  {
    if(direction == 'down')
    {
      contenedor.addClass('featurette-fade');
      console.log("point");
    }else
    {
      contenedor.removeClass('featurette-fade');
      console.log("point");
    }
  },{offset:'80%'});

  var contenedor2 = $('.segunda-seccion');
  contenedor2.waypoint(
    function (direction)
    {
      if(direction == 'down')
      {
        contenedor2.addClass('featurette-fade');
        console.log("point");
      }else
      {
        contenedor2.removeClass('featurette-fade');
        console.log("point");
      }
    },{offset:'80%'});
