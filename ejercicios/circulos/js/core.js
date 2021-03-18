let canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d')

// console.log( Math.PI )

context.arc( 200, 200, 150, Math.PI*0, Math.PI*2, false)
context.fillStyle = '#F3FEB0'
context.fill()
context.lineWidth = 5
context.strokeStyle = '#705E78'
context.stroke()