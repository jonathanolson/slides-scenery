
$( window ).ready( function() {
  // Create a scene graph over the block-level element. Everything inside is replaced
  var scene = new scenery.Scene( $( '#hello-world-scene' ) );
   
  // Add our text
  scene.addChild( new scenery.Text( 'Hello World', {
    centerX: 200, // the center of our text's bounds is at x = 200
    centerY: 50, // the center of our text's bounds is at y = 50
    font: '40px sans-serif', fill: '#eee'
  } ) );
   
  // Paint any changes (in this case, our text).
  scene.updateScene();
});
