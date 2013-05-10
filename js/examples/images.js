
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#images-scene' ), { renderer: 'svg' } ); // SVG so we don't need extra scene updates
  var imgScene = scene;

  var imageUrl = 'http://phet.colorado.edu/sims/energy-skate-park/energy-skate-park-basics-thumbnail.png';

  // direct URL reference, but cannot position based on bounds
  scene.addChild( new scenery.Image( imageUrl, {
    x: 100, y: -30, rotation: Math.PI / 6,
  } ) );

  // can also pass in HTMLImageElement or HTMLCanvasElement references
  var img = document.createElement( 'img' );
  img.src = imageUrl;
  scene.addChild( new scenery.Image( img, { opacity: 0.25, scale: 2 } ) );

  scene.updateScene();
});
