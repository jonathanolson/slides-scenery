
var graphHighlight = '#ccc';
function graphNode( name ) {
  var text = new scenery.Text( name, {
    fontSize: 35, centerX: 0, centerY: 0, fill: '#222'
  } );
  var background = new scenery.Path( {
    shape: kite.Shape.bounds( text.bounds.dilated( 10 ) ),
    stroke: '#000',
    lineWidth: 3,
    fill: graphHighlight
  } );
  var node = new scenery.Node( {
    children: [
      background,
      text
    ]
  } );
  return node;
}

function link( aNode, bNode ) {
  var verticalOffset = -5;
  var from = dot( aNode.centerX, 0.5 * aNode.centerY + 0.5 * aNode.bottom );
  var to = dot.lineLineIntersection( from, bNode.center, dot( bNode.left, bNode.top + verticalOffset ), dot( bNode.right, bNode.top + verticalOffset ) )
              .blend( dot( bNode.centerX, bNode.top + verticalOffset ), 0.5 );
  var dir = to.minus( from ).normalized();
  var mid = to.minus( dir.times( 7 ) );
  var off = dir.perpendicular().times( 3 );
  return new scenery.Path( {
    shape: new kite.Shape().moveToPoint( from )
                           .lineToPoint( mid )
                           .lineToPoint( mid.plus( off ) )
                           .lineToPoint( to )
                           .lineToPoint( mid.minus( off ) )
                           .lineToPoint( mid ),
    // shape: kite.Shape.lineSegment( aNode.centerX, 0.5 * aNode.centerY + 0.5 * aNode.bottom,
                                   // bNode.centerX, 0.5 * bNode.centerY + 0.5 * bNode.top ),
    lineWidth: 5,
    stroke: graphHighlight,
    lineCap: 'square'
  } );
}
