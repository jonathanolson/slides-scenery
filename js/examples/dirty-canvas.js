
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#dirty-canvas-scene' ) );
  
  var rect = new scenery.Rectangle( -80, -80, 160, 160, {
    fill: '#0c0',
    x: 150, y: 150
  } );
  var boundsNode = new scenery.Path( {
    fill: 'rgba(0,0,0,0.3)',
    stroke: '#eee',
    lineWidth: 1
  } );
  
  scene.addChild( boundsNode );
  scene.addChild( rect );
  
  // return step function
  scene.timestep = function( timeElapsed ) {
    rect.rotation += timeElapsed;
    boundsNode.shape = kite.Shape.bounds( rect.bounds );
    scene.updateScene();
  };
});
