
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#kite-scene' ) );
  
  var leftShape = new kite.Shape( 'M1408 544v-480q0 -26 -19 -45t-45 -19h-384v384h-256v-384h-384q-26 0 -45 19t-19 45v480q0 1 0.5 3t0.5 3l575 474l575 -474q1 -2 1 -6zM1631 613l-62 -74q-8 -9 -21 -11h-3q-13 0 -21 7l-692 577l-692 -577q-12 -8 -24 -7q-13 2 -21 11l-62 74q-8 10 -7 23.5t11 21.5 l719 599q32 26 76 26t76 -26l244 -204v195q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-408l219 -182q10 -8 11 -21.5t-7 -23.5z' );
  leftShape = leftShape.transformed( dot.Matrix3.translation( -leftShape.bounds.centerX, -leftShape.bounds.centerY ) );
  
  var leftPath = new scenery.Path( {
    shape: leftShape,
    rotation: Math.PI,
    scale: 0.13,
    x: 128,
    y: 128,
    fill: '#eee'
  } );
  
  var leftBounds = new scenery.Path( {
    fill: 'rgba(0,255,0,0.5)'
  } );
  
  var leftHit = new scenery.Path( {
    stroke: '#f00', lineWidth: 30,
    rotation: Math.PI,
    scale: 0.13,
    x: 128,
    y: 128
  } );
  
  scene.addChild( leftBounds );
  scene.addChild( leftPath );
  scene.addChild( leftHit );
  
  leftHit.layerSplitAfter = true;
  
  var rightShape = new kite.Shape().moveTo( 350, 100 )
                                   .cubicCurveTo( 500, 20, 450, 240, 650, 200 );
  var cubic = rightShape.subpaths[0].segments[0];
  var lineStyles = new kite.LineStyles( { lineWidth: 30 } );
  
  function curve( cubic ) {
    return new kite.Shape().moveToPoint( cubic.start )
                           .lineToPoint( cubic.control1 )
                           .lineToPoint( cubic.control2 )
                           .lineToPoint( cubic.end );
  }
  
  console.log( cubic );
  scene.addChild( new scenery.Path( {
    shape: rightShape.getStrokedShape( lineStyles ),
    fill: '#eee', stroke: '#0f0', lineWidth: 3
  } ) );
  scene.addChild( new scenery.Path( {
    shape: rightShape,
    stroke: '#000', lineWidth: 1
  } ) );
  var firstHalf = new scenery.Path( {
    stroke: '#f00', lineWidth: 3
  } );
  scene.addChild( firstHalf );
  var secondHalf = new scenery.Path( {
    stroke: '#33f', lineWidth: 3
  } );
  scene.addChild( secondHalf );
  
  var x = leftPath.x;
  var y = leftPath.y;
  var splitT = 0.5;
  var splitIndex = 0;
  scene.timestep = function( timeElapsed ) {
    leftPath.shape = leftPath.shape.transformed( dot.Matrix3.rotation2( timeElapsed ) );
    leftBounds.shape = kite.Shape.bounds( leftPath.bounds );
    
    var hit = leftPath.shape.intersection( new dot.Ray2( dot( 5000, 0 ), dot( -1, 0 ) ) )[0];
    leftHit.shape = hit ? kite.Shape.lineSegment( 5000, 0, hit.point.x, hit.point.y ) : null;
    
    splitT += timeElapsed / 5;
    while ( splitT > 1 ) {
      splitT -= 1;
      splitIndex = 1 - splitIndex;
    }
    var split = cubic.subdivided( splitT, true );
    firstHalf.shape = curve( split[splitIndex] );
    secondHalf.shape = curve( split[1 - splitIndex] );
    
    scene.updateScene();
  };
  
  scene.updateScene();
});
