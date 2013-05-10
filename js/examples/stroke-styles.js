
$( window ).ready( function() {
  var strokeTextColor = '#ddd';
  var strokeMainColor = 'rgba(255,255,255,0.7)';
  var strokeLineColor = '#a50';
  (function(){
    // NOTE: Chrome canvas lineWidth with pattern bug (looks like half size?)
    var scene = new scenery.Scene( $( '#line-cap-scene' ) );
    
    scene.scale( 1.5 );
    
    scene.addChild( new scenery.Text( 'butt', {
      fontSize: 14,
      centerX: 256/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    scene.addChild( new scenery.Text( 'square', {
      fontSize: 14,
      centerX: 256*3/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    scene.addChild( new scenery.Text( 'round', {
      fontSize: 14,
      centerX: 256*5/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    
    var shape = kite.Shape.lineSegment( 0, 50, 0, 70 );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256/6,
      stroke: strokeMainColor,
      lineWidth: 30,
      lineCap: 'butt'
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*3/6,
      stroke: strokeMainColor,
      lineWidth: 30,
      lineCap: 'square'
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*5/6,
      stroke: strokeMainColor,
      lineWidth: 30,
      lineCap: 'round'
    } ) );
    // add a red highlight
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256/6,
      stroke: strokeLineColor
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*3/6,
      stroke: strokeLineColor
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*5/6,
      stroke: strokeLineColor
    } ) );
      
    scene.updateScene();
  })();
  (function(){
    var scene = new scenery.Scene( $( '#line-join-scene' ) );
    
    scene.scale( 1.5 );
    
    scene.addChild( new scenery.Text( 'miter', {
      fontSize: 14,
      centerX: 256/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    scene.addChild( new scenery.Text( 'bevel', {
      fontSize: 14,
      centerX: 256*3/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    scene.addChild( new scenery.Text( 'round', {
      fontSize: 14,
      centerX: 256*5/6,
      y: 20,
      fill: strokeTextColor
    } ) );
    
    var shape = new kite.Shape().moveTo( -30, 80 ).lineTo( 0, 50 ).lineTo( 30, 80 );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256/6,
      stroke: strokeMainColor,
      lineWidth: 25,
      lineJoin: 'miter'
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*3/6,
      stroke: strokeMainColor,
      lineWidth: 25,
      lineJoin: 'bevel'
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*5/6,
      stroke: strokeMainColor,
      lineWidth: 25,
      lineJoin: 'round'
    } ) );
    // add a red highlight
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256/6,
      stroke: strokeLineColor
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*3/6,
      stroke: strokeLineColor
    } ) );
    scene.addChild( new scenery.Path( {
      shape: shape,
      x: 256*5/6,
      stroke: strokeLineColor
    } ) );
    
    scene.updateScene();
  })();
  (function(){
    var scene = new scenery.Scene( $( '#line-dash-scene' ) );
    
    scene.scale( 1.5 );
    
    scene.addChild( new scenery.Path( {
      shape: kite.Shape.lineSegment( 0, 7, 256, 7 ),
      stroke: strokeLineColor
    } ) );
    scene.addChild( new scenery.Path( {
      shape: kite.Shape.lineSegment( 0, 24, 256, 24 ),
      stroke: strokeLineColor
    } ) );
    
    scene.addChild( new scenery.Path( {
      shape: kite.Shape.lineSegment( 0, 7, 256, 7 ),
      stroke: strokeMainColor,
      lineWidth: 6,
      lineDash: [ 10, 10 ]
    } ) );
    scene.addChild( new scenery.Path( {
      shape: kite.Shape.lineSegment( 0, 24, 256, 24 ),
      stroke: strokeMainColor,
      lineWidth: 6,
      lineDash: [ 20, 8, 10, 8 ]
    } ) );
    
    scene.updateScene();
  })();
});
