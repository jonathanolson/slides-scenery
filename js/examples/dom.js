
$( window ).ready( function() {
  var scene = new scenery.Scene( $( '#dom-scene' ) );
  
  var element = document.createElement( 'span' );
  element.innerHTML = '<label style="display: inline;">Type in me:</label><input type="text">';
  scene.addChild( new scenery.DOM( element, { x: 120, rotation: Math.PI / 6 } ) );
  
  // HTML, with the same styling and positioning as Text
  scene.addChild( new scenery.HTMLText( '<em>Italic</em> and <b>Bold</b> ', {
    fontSize: 30, bottom: 230, centerX: 200, fill: '#9aa'
  } ) );
  
  scene.updateScene();
});
