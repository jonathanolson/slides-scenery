
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#fills-scene' ) );
  
  var first = new scenery.Rectangle( 0, 0, 100, 100, 10, 10, { x: 10, y: 10 } );
  scene.addChild( first );
  
  var secondBottom = new scenery.Rectangle( 0, 0, 100, 100, 10, 10, { x: 120, y: 10 } );
  scene.addChild( secondBottom );
  
  var secondTop = new scenery.Rectangle( 0, 0, 100, 100, 10, 10, { x: 120, y: 10 } );
  scene.addChild( secondTop );
  
  var third = new scenery.Rectangle( 0, 0, 100, 100, 10, 10, { x: 230, y: 10 } );
  scene.addChild( third );
  
  var fillScene = scene;
  var img = document.createElement( 'img' );
  img.addEventListener( 'load', function() {
    first.fill = 'rgba(255,127,0,0.8)'; // full support for CSS colors

    secondBottom.fill = new scenery.LinearGradient( 0, 0, 100, 0 )
                                   .addColorStop( 0, '#000' )
                                   .addColorStop( 1, '#666' );

    secondTop.fill = new scenery.RadialGradient( 32, 32, 5, 64, 64, 60 )
                                .addColorStop( 0, '#0ff' )
                                .addColorStop( 1, 'rgba(0,127,255,0)' );
    
    var transform = dot.Matrix3.rotation2( Math.PI / 6 )
                               .timesMatrix( dot.Matrix3.scale( 0.3 ) );
    third.fill = new scenery.Pattern( img ).setTransformMatrix( transform );
    
    scene.updateScene();
  } );
  img.src = 'http://phet.colorado.edu/images/phet-logo-yellow.png';
  
  scene.updateScene();
});