let canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d')

context.rotate(10 * Math.PI / 180 )
context.fillRect( 135, 135, 30, 30 )