
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#shapes-scene' ) );
  
  scene.addChild( new scenery.Rectangle( 20, 10, 100, 80, {
    fill: '#f00', stroke: '#fff', lineWidth: 2
  } ) );
  
  scene.addChild( new scenery.Path( {
    shape: kite.Shape.regularPolygon( 8, 30 ),
    fill: '#0f0', x: 170, y: 50
  } ) );
  
  scene.addChild( new scenery.Path( {
    // shape: new kite.Shape( 'M0 90Q155 50 0 10Z' ),
    shape: new kite.Shape().lineTo( 0, 90 )
                           .quadraticCurveTo( 155, 50, 0, 10 )
                           .close(),
    fill: '#00f', x: 220
  } ) );
  
  scene.updateScene();
});
