
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#bounds-scene' ) );
  
  var boundsColor = 'rgba(128,255,128,0.15)';
  function addBound( node, color ) {
    scene.addChild( new scenery.Path( {
      shape: kite.Shape.bounds( node.bounds ),
      fill: color ? color : boundsColor
    } ) );
  }
  var path = new scenery.Path( {
    shape: new kite.Shape( 'M -100 -100 C -50 50 50 50 0 100' ),
    stroke: '#eee',
    lineWidth: 30,
    rotation: Math.PI / 2,
    x: 150, y: 140
  } );
  var fastText = new scenery.Text( 'Fast Text Bounds', {
    // top: path.bottom + 10,
    // left: path.left,
    font: '40px sans-serif', fill: '#eee'
  } );
  var accurateText = new scenery.Text( 'Accurate Text Bounds', {
    // top: fastText.bottom + 10,
    // left: path.left,
    font: '40px sans-serif', fill: '#eee',
    boundsMethod: 'accurate', renderer: 'canvas'
  } );
  
  // vertical layout
  path.top = 20;
  fastText.top = path.bottom + 20;
  accurateText.top = fastText.bottom + 20;
  
  // horizontal layout
  fastText.left = 20;
  path.centerX = fastText.centerX;
  accurateText.left = path.left;
  
  scene.addChild( path );
  
  scene.addChild( fastText );
  
  scene.addChild( accurateText );
  
  addBound( scene, 'rgba(128,128,255,0.1)')
  addBound( path );
  addBound( fastText );
  addBound( accurateText );
  
  scene.updateScene();
});
