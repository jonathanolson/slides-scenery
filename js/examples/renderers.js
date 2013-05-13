// deprecated for now (nested CSS transforms playing tricks on browsers), see renderers.html

$( window ).ready( function() {
  var canvasScene = new scenery.Scene( $( '#canvas-renderer-scene' ), { renderer: 'canvas' } );
  var svgScene = new scenery.Scene( $( '#svg-renderer-scene' ), { renderer: 'svg' } );
  var domScene = new scenery.Scene( $( '#dom-renderer-scene' ), { renderer: 'dom' } );
  
  canvasScene.addChild( new scenery.Text( 'Canvas', { boundsMethod: 'fastCanvas', bottom: 120, fill: '#eee', fontSize: 24 } ) );
  svgScene.addChild( new scenery.Text( 'SVG', { boundsMethod: 'fastCanvas', bottom: 120, fill: '#eee', fontSize: 24 } ) );
  domScene.addChild( new scenery.Text( 'DOM', { boundsMethod: 'fastCanvas', bottom: 120, fill: '#eee', fontSize: 24 } ) );
  
  var logo = document.createElement( 'img' );
  logo.addEventListener( 'load', function() {
    var node = new scenery.Image( logo, {
      scale: 0.5,
      rotation: Math.PI / 6,
      x: 130,
      y: 20
    } );
    canvasScene.addChild( node );
    canvasScene.updateScene();
    svgScene.addChild( node );
    svgScene.updateScene();
    domScene.addChild( node );
    domScene.updateScene();
  } );
  logo.src = 'http://phet.colorado.edu/images/phet-logo-yellow.png';
});
