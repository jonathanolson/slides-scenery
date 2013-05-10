
$( window ).ready( function() {
  (function(){
  var scene = new scenery.Scene( $( '#dag-tree-scene' ) );
  
  var sceneNode = graphNode( 'Scene' );
  var topNode = graphNode( 'Top' );
  var middleNode = graphNode( 'Middle' );
  var bottomNode = graphNode( 'Bottom' );
  var sectionNode = graphNode( 'Section' );
  var backNode = graphNode( 'Back' );
  var leftNode = graphNode( 'Left' );
  var rightNode = graphNode( 'Right' );
  var arrowNode = graphNode( 'Arrow' );
  
  bottomNode.y = 100;
  middleNode.y = 100;
  topNode.y = 100;
  
  sectionNode.y = 200;
  
  backNode.y = 300;
  leftNode.y = 300;
  rightNode.y = 300;
  
  arrowNode.y = 400;
  
  bottomNode.right = middleNode.left - 20;
  topNode.left = middleNode.right + 20;
  var offset = -( topNode.right + bottomNode.left ) / 2;
  bottomNode.x += offset;
  middleNode.x += offset;
  topNode.x += offset;
  
  backNode.right = leftNode.left - 20;
  rightNode.left = leftNode.right + 20;
  offset = -( rightNode.right + backNode.left ) / 2;
  backNode.x += offset;
  leftNode.x += offset;
  rightNode.x += offset;
  
  scene.addChild( link( sceneNode, topNode ) );
  scene.addChild( link( sceneNode, middleNode ) );
  scene.addChild( link( sceneNode, bottomNode ) );
  scene.addChild( link( topNode, sectionNode ) );
  scene.addChild( link( middleNode, sectionNode ) );
  scene.addChild( link( bottomNode, sectionNode ) );
  scene.addChild( link( sectionNode, backNode ) );
  scene.addChild( link( sectionNode, leftNode ) );
  scene.addChild( link( sectionNode, rightNode ) );
  scene.addChild( link( leftNode, arrowNode ) );
  scene.addChild( link( rightNode, arrowNode ) );
  
  scene.addChild( sceneNode );
  scene.addChild( topNode );
  scene.addChild( middleNode );
  scene.addChild( bottomNode );
  scene.addChild( sectionNode );
  scene.addChild( backNode );
  scene.addChild( leftNode );
  scene.addChild( rightNode );
  scene.addChild( arrowNode );
  
  scene.centerX = 440/2;
  scene.centerY = 500/2;
  
  scene.updateScene();
})();

(function(){
  var scene = new scenery.Scene( $( '#dag-coord-scene' ), { renderer: 'svg' } );
  
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
  
  scene.centerX = 340/2;
  scene.centerY = 300/2;
  
  scene.updateScene();
})();
});
