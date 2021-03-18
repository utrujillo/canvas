let canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d')

context.lineWidth = 15
context.strokeStyle = '#00FF00'
context.strokeRect(25, 100, 80, 80)

context.fillStyle = '#FF0000'
context.fillRect(115, 100, 80, 80)

context.fillStyle = "#000000"
context.font = '24px Helvetica'
context.fillText("Presiona para limpiar", 150, 150)

context.fillStyle = 'rgba(254, 164, 67, .3)'
context.fillRect(215, 100, 80, 80)

context.canvas.onmousedown = function () {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener( 'click', function () {
  console.log(' Limpiando canvas ')
  context.clearRect(0, 0, canvas.width, canvas.height)
} )