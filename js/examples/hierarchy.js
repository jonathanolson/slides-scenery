
$( window ).ready( function() {
  (function(){
    var scene = new scenery.Scene( $( '#hier-tree-scene' ) );
    
    var scenePoint = dot( 0, 0 );
    var aPoint = dot( -80, 100 );
    var bPoint = dot( 80, 100 );
    var cPoint = dot( -160, 200 );
    var dPoint = dot( 0, 200 );
    
    var sceneNode = graphNode( 'Scene' ); sceneNode.translation = scenePoint;
    var aNode = graphNode( 'A' ); aNode.translation = aPoint;
    var bNode = graphNode( 'B' ); bNode.translation = bPoint;
    var cNode = graphNode( 'C' ); cNode.translation = cPoint;
    var dNode = graphNode( 'D' ); dNode.translation = dPoint;
    
    scene.addChild( link( sceneNode, aNode ) );
    scene.addChild( link( sceneNode, bNode ) );
    scene.addChild( link( aNode, cNode ) );
    scene.addChild( link( aNode, dNode ) );
    
    scene.addChild( sceneNode );
    scene.addChild( aNode );
    scene.addChild( bNode );
    scene.addChild( cNode );
    scene.addChild( dNode );
    
    scene.centerX = 340/2;
    scene.centerY = 300/2;
    
    scene.updateScene();
  })();
  
  (function(){
    var scene = new scenery.Scene( $( '#hier-coord-scene' ), { renderer: 'svg' } );
    
    function axes( node, name ) {
      var main = 40;
      var sub = 38;
      var width = 2;
      
      node.addChild( new scenery.Text( name, {
        fontSize: 14,
        top: 1,
        left: 2,
        fill: 'rgba(255,255,255,0.6)'
      } ) );
      
      // Y
      node.addChild( new scenery.Path( {
        shape: new kite.Shape().moveTo( 0, 0 )
                               .lineTo( 0, sub )
                               .lineTo( -width, sub )
                               .lineTo( 0, main )
                               .lineTo( width, sub )
                               .lineTo( 0 , sub),
        stroke: 'rgba(0,255,0,0.7)',
        lineWidth: 2
      } ) );
      
      // X
      node.addChild( new scenery.Path( {
        shape: new kite.Shape().moveTo( 0, 0 )
                               .lineTo( sub, 0 )
                               .lineTo( sub, -width )
                               .lineTo( main, 0 )
                               .lineTo( sub, width )
                               .lineTo( sub, 0 ),
        stroke: 'rgba(255,0,0,0.7)',
        lineWidth: 2
      } ) );
      
      if ( node.parents.length ) {
        var parent = node.parents[0];
        var parentPoint = node.localToParentPoint( dot.Vector2.ZERO );
        parent.insertChild( 0, new scenery.Rectangle( 0, 0, parentPoint.x, parentPoint.y, {
          stroke: '#888',
          lineDash: [ 4, 4 ]
        } ) );
      }
    }
    
    var a = new scenery.Node( {
      x: 50,
      y: 200,
      rotation: -Math.PI / 6
    } );
    scene.addChild( a );
    
    var b = new scenery.Text( 'Xyz', {
      fontSize: 70,
      centerX: 340/2,
      top: 50,
      fill: 'rgba(255,255,255,0.7)'
    } );
    scene.addChild( b );
    
    var c = new scenery.Rectangle( 0, 0, 200, 60, { x: 30, y: 30, fill: 'rgba(255,255,255,0.4)', rotation: Math.PI / 15 } );
    a.addChild( c );
    
    var d = new scenery.Text( 'Abc', {
      fontSize: 40,
      x: 90,
      top: 60,
      fill: '#000'
      // fill: 'rgba(255,200,200,0.6)'
    } );
    a.addChild( d );
    
    axes( scene, 'scene' );
    axes( a, 'A' );
    axes( b, 'B' );
    axes( c, 'C' );
    axes( d, 'D' );
    
    scene.updateScene();
  })();
});
