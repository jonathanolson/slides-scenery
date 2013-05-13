
$( window ).ready( function() {
  (function(){
    var scene = new scenery.Scene( $( '#dynamic-layers-scene' ) );
    
    var tree = new scenery.Node();
    var sceneNode = graphNode( 'Scene', '#6f6' );
    tree.addChild( sceneNode );
    
    var left = new scenery.Node(); tree.addChild( left );
    var right = new scenery.Node(); tree.addChild( right );
    
    var n1 = graphNode( '_', '#6f6', 'transparent' );
    var n2 = graphNode( '_', '#f66', 'transparent' );
    var n3 = graphNode( '_', '#6f6', 'transparent' );
    
    var p1 = graphNode( '1', '#6f6', '#000' );
    var p2 = graphNode( '2', '#f66', '#000' );
    var p3 = graphNode( '3', '#66f', '#000' );
    var p4 = graphNode( '4', '#66f', '#000' );
    var p5 = graphNode( '5', '#6f6', '#000' );
    
    var dx = 50;
    var dy = 100;
    
    n1.y = dy; left.addChild( n1 );
    n2.x = dx; n2.y = 2*dy; left.addChild( n2 );
    p1.x = -dx; p1.y = 2*dy; left.addChild( p1 );
    p2.y = 3*dy; left.addChild( p2 );
    p3.x = 2*dx; p3.y = 3*dy; left.addChild( p3 );
    
    n3.y = dy; right.addChild( n3 );
    p4.x = -dx; p4.y = 2*dy; right.addChild( p4 );
    p5.x = dx; p5.y = 2*dy; right.addChild( p5 );
    
    var diff = left.right - right.left;
    
    left.x = -diff/2;
    right.x = diff/2;
    
    tree.centerX = 350/2 + 20;
    tree.centerY = 200;
    scene.addChild( tree );
    
    var fakeGroup = graphNode( '_' );
    fakeGroup.y = dy;
    fakeGroup.x = -left.x;
    
    tree.insertChild( 0, link( sceneNode, fakeGroup ) );
    left.insertChild( 0, link( n1, p1 ) );
    left.insertChild( 0, link( n1, n2 ) );
    left.insertChild( 0, link( n2, p2 ) );
    left.insertChild( 0, link( n2, p3 ) );
    
    fakeGroup.x = -right.x;
    tree.insertChild( 0, link( sceneNode, fakeGroup ) );
    right.insertChild( 0, link( n3, p4 ) );
    right.insertChild( 0, link( n3, p5 ) );
    
    scene.updateScene();
  })();
  
  (function(){
    var scene = new scenery.Scene( $( '#dynamic-layers2-scene' ) );
    
    var width = 200;
    
    var sf = 60;
    
    scene.addChild( new scenery.Rectangle( -24, -sf/2, width, sf, { stroke: '#000', lineWidth: 4, fill: '#6f6' } ) );
    scene.addChild( new scenery.Rectangle( -24, sf-sf/2, width, sf*2, { stroke: '#000', lineWidth: 4, fill: '#66f' } ) );
    scene.addChild( new scenery.Rectangle( -24, 3*sf-sf/2, width, sf, { stroke: '#000', lineWidth: 4, fill: '#f66' } ) );
    scene.addChild( new scenery.Rectangle( -24, 4*sf-sf/2, width, sf, { stroke: '#000', lineWidth: 4, fill: '#6f6' } ) );
    
    scene.addChild( new scenery.Text( 'Canvas', { fontSize: 30, centerX: 100, centerY: 0 } ) );
    scene.addChild( new scenery.Text( 'SVG', { fontSize: 30, centerX: 100, centerY: (3*sf)/2 } ) );
    scene.addChild( new scenery.Text( 'DOM', { fontSize: 30, centerX: 100, centerY: 3*sf } ) );
    scene.addChild( new scenery.Text( 'Canvas', { fontSize: 30, centerX: 100, centerY: 4*sf } ) );
    
    var p1 = graphNode( '1', '#6f6', '#000', 'transparent' ); scene.addChild( p1 ); p1.y = 4 * sf;
    var p2 = graphNode( '2', '#f66', '#000', 'transparent' ); scene.addChild( p2 ); p2.y = 3 * sf;
    var p3 = graphNode( '3', '#66f', '#000', 'transparent' ); scene.addChild( p3 ); p3.y = 2 * sf;
    var p4 = graphNode( '4', '#66f', '#000', 'transparent' ); scene.addChild( p4 ); p4.y = sf;
    var p5 = graphNode( '5', '#6f6', '#000', 'transparent' ); scene.addChild( p5 ); p5.y = 0;
    
    scene.centerX = 150;
    scene.centerY = 200;
    
    scene.updateScene();
  })();
});
