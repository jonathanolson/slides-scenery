
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#text-bounds-scene' ) );
  
  function create( text, left ) {
    var canvasBounds = text.accurateCanvasBounds();
    var svgBounds = text.approximateSVGBounds();
    var domBounds = text.approximateDOMBounds();
    
    var unionBounds = canvasBounds.union( svgBounds ).union( domBounds );
    
    var container = new scenery.Node();
    
    container.addChild( new scenery.Path( {
      shape: kite.Shape.bounds( canvasBounds ),
      fill: '#aaaaaa'
    } ) );
    container.addChild( new scenery.Path( {
      shape: kite.Shape.bounds( svgBounds ),
      fill: 'rgba(255,0,0,0.4)'
    } ) );
    container.addChild( new scenery.Path( {
      shape: kite.Shape.bounds( domBounds ),
      fill: 'rgba(0,0,255,0.4)'
    } ) );
    // container.addChild( new scenery.Path( {
    //   shape: kite.Shape.lineSegment( new dot.Vector2( domBounds.minX + width, domBounds.minY ), new dot.Vector2( domBounds.minX + width, domBounds.maxY ) ),
    //   stroke: '#00ff00'
    // } ) );
    
    // TODO: improve how layer strategies are used
    var svgNode = new scenery.Node( { renderer: 'svg' } );
    svgNode.addChild( text );
    var canvasNode = new scenery.Node( { renderer: 'canvas' } );
    canvasNode.addChild( text );
    
    container.addChild( svgNode );
    container.addChild( canvasNode );
    text.fill = 'rgba(255,255,255,0.6)';
    
    // container.addChild( new scenery.Path( {
    //   shape: kite.Shape.lineSegment( new dot.Vector2( 5, 0.5 ), new dot.Vector2( -5, 0.5 ) ),
    //   stroke: 'rgba(0,0,0,0.5)'
    // } ) );
    // container.addChild( new scenery.Path( {
    //   shape: kite.Shape.lineSegment( new dot.Vector2( 0.5, 5 ), new dot.Vector2( 0.5, -5 ) ),
    //   stroke: 'rgba(0,0,0,0.5)'
    // } ) );
    
    container.centerY = 50;
    container.left = left;
    
    return container;
  }
  
  var textA = new scenery.Text( '\u0906', { font: 'italic 50px sans-serif' } );
  var textB = new scenery.Text( '\u79C1', { font: 'italic 50px sans-serif' } );
  var textC = new scenery.Text( 'A\u030a\u0352\u0333\u0325\u0353\u035a\u035e\u035e', { fontSize: 50 } );
  var textD = new scenery.Text( '0\u0489', { font: 'italic 50px sans-serif' } );
  var textE = new scenery.Text( 'some text', { font: 'italic 50px sans-serif' } );
  
  scene.addChild( create( textA, 20 ) );
  scene.addChild( create( textB, 90 ) );
  scene.addChild( create( textC, 160 ) );
  scene.addChild( create( textD, 230 ) );
  scene.addChild( create( textE, 290 ) );
  
  scene.updateScene();
});
