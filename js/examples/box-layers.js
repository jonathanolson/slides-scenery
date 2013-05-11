
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#box-layers-scene' ) );
  
  var backgroundSize = 300;
  
  function randomizeTranslation( node ) {
    node.setTranslation( ( Math.random() - 0.5 ) * backgroundSize, ( Math.random() - 0.5 ) * backgroundSize );
  }
  
  function buildShapes( color ) {
    var background = new scenery.Node();
    
    var isMiddleLayer = ( color === 'rgba(0,255,0,0.6)' );
    if ( isMiddleLayer ) {
      background.layerSplit = true;
    }
    
    var radius = 10;
    var shape = kite.Shape.regularPolygon( 6, radius );
    
    for ( var i = 0; i < ( isMiddleLayer ? 50 : 300 ); i++ ) {
      var node = new scenery.Path( {
        shape: shape, // regular polygon
        fill: color,
        stroke: '#000000'
      } );
      
      randomizeTranslation( node );
      
      background.addChild( node );
    }
    return background;
  }
  
  var reds = buildShapes( 'rgba(255,0,0,0.6)' );
  var greens = buildShapes( 'rgba(0,255,0,0.6)' );
  var blues = buildShapes( 'rgba(0,0,255,0.6)' );
  
  scene.addChild( reds );
  scene.addChild( greens );
  scene.addChild( blues );
  
  // center the scene
  scene.translate( scene.sceneBounds.width / 2, scene.sceneBounds.height / 2 );
  
  // return step function
  scene.timestep = function( timeElapsed ) {
    greens.rotate( timeElapsed );
    scene.updateScene();
  };
});
