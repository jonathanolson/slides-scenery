
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#opacity-scene' ) );
  
  var circle = kite.Shape.circle( 0, 0, 30 );
  scene.addChild( new scenery.Node( {
    children: [
      new scenery.Rectangle( -400, 12, 800, 20, { fill: '#fff' } ),
      new scenery.Node( {
        opacity: 0.6,
        children: [
          new scenery.Path( { shape: circle, x: -220, y: 22, fill: '#f00' } ),
          new scenery.Path( { shape: circle, x: -180, y: 22, fill: '#00f' } ),
          new scenery.Path( { shape: circle, x: -20, y: 22, fill: '#f00', renderer: 'svg' } ),
          new scenery.Path( { shape: circle, x: 20, y: 22, fill: '#00f' } ),
          new scenery.Path( { shape: circle, x: 180, y: 22, fill: '#f00', renderer: 'svg' } ),
          new scenery.Path( { shape: circle, x: 220, y: 22, fill: '#00f', renderer: 'svg' } )
        ]
      } ),
      new scenery.Text( 'Both Canvas', { centerX: -200, top: 60, fontSize: 22, fill: '#eee' } ),
      new scenery.Text( 'Canvas and SVG', { centerX: 0, top: 60, fontSize: 22, fill: '#eee' } ),
      new scenery.Text( 'Both SVG', { centerX: 200, top: 60, fontSize: 22, fill: '#eee' } )
    ],
    centerX: 630/2,
    centerY: 75
  } ) );
  
  scene.updateScene();
});
