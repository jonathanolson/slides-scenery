
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#user-input-scene' ), { renderer: 'svg' } );
  scene.initializeStandaloneEvents();
  
  var arrow = new scenery.Path( {
    shape: kite.Shape.regularPolygon( 3, 20 ), fill: '#0f0', stroke: '#000'
  } );
  var section = new scenery.Node( { children: [
    new scenery.Rectangle( 0, 0, 100, 100, {
      fill: 'rgba(255,255,255,0.2)', stroke: '#000', lineWidth: 6
    } ),
    new scenery.Node( { x: 30, y: 50, children: [ arrow ] } ), // left
    new scenery.Node( { x: 70, y: 50, children: [ arrow ] } )  // right
  ] } );
  scene.children = [
    new scenery.Node( { children: [ section ], x: 40, y: 40 } ),
    new scenery.Node( { children: [ section ], x: 140, y: 180,
                        rotation: Math.PI / 2 } ),
    new scenery.Node( { children: [ section ], x: 220, y: 90, 
                        rotation: Math.PI / 4 } )
  ];
  
  section.cursor = 'pointer';
  // section.addInputListener( new scenery.SimpleDragHandler() );
  _.each( scene.children, function( child ) { child.addInputListener( new scenery.SimpleDragHandler() ); } );
  
  // scene.addInputListener( { move: function( event ) { console.log( event.pointer.point.toString() ); } } );
  
  scene.centerX = 340/2;
  scene.centerY = 300/2;
  
  scene.timestep = function() {};
  
  scene.updateScene();
});

// $( window ).ready( function() {
//   var scene = new scenery.Scene( $( '#user-input2-scene' ), { renderer: 'svg' } );
//   scene.initializeStandaloneEvents();
  
//   var arrow = new scenery.Path( {
//     shape: kite.Shape.regularPolygon( 3, 20 ), fill: '#0f0', stroke: '#000'
//   } );
//   var section = new scenery.Node( { children: [
//     new scenery.Rectangle( 0, 0, 100, 100, {
//       fill: 'rgba(255,255,255,0.2)', stroke: '#000', lineWidth: 6
//     } ),
//     new scenery.Node( { x: 30, y: 50, children: [ arrow ] } ), // left
//     new scenery.Node( { x: 70, y: 50, children: [ arrow ] } )  // right
//   ] } );
//   scene.children = [
//     new scenery.Node( { children: [ section ], x: 40, y: 40 } ),
//     new scenery.Node( { children: [ section ], x: 140, y: 180,
//                         rotation: Math.PI / 2 } ),
//     new scenery.Node( { children: [ section ], x: 220, y: 90, 
//                         rotation: Math.PI / 4 } )
//   ];
  
//   section.cursor = 'pointer';
//   section.addInputListener( new scenery.SimpleDragHandler() );
//   // _.each( scene.children, function( child ) { child.addInputListener( new scenery.SimpleDragHandler() ); } );
  
//   // scene.addInputListener( { move: function( event ) { console.log( event.pointer.point.toString() ); } } );
  
//   scene.centerX = 340/2;
//   scene.centerY = 300/2;
  
//   scene.timestep = function() {};
  
//   scene.updateScene();
// });
