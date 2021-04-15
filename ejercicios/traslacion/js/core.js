let canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  btnFijo = document.getElementById('btnFijo'),
  btnReload = document.getElementById('btnReload'),
  btnTrasladar = document.getElementById('btnTrasladar'),
  posX = document.getElementById('posX'),
  posY = document.getElementById('posY'),
  btnAnimate = document.getElementById('btnAnimate'),
  posInitX = 20,
  posInitY = 20

context.fillStyle = '#FF0000'
//               x,  y , alto, ancho
// x' = x + d
// y' = y + d
context.fillRect( posInitX, posInitY, 30, 30 )

btnFijo.addEventListener( 'click', function(){
  cleanCanvas()
  let x_distancia = 200
  context.fillRect( posInitX + x_distancia, 20, 30, 30 )
} )

btnReload.addEventListener( 'click', function (){
  location.reload();
} )

btnTrasladar.addEventListener( 'click', function (){
  // console.log(` PosX: ${posX.value} PosY: ${posY.value} `)
  cleanCanvas()
  context.fillRect( posX.value, posY.value, 30, 30 )
} )

btnAnimate.addEventListener( 'click', slowMotion )

function slowMotion(){
  setTimeout( function(){
    console.log( `${posInitX}  ${posX.value} ${posInitY} ${posY.value}` )
    posInitX += 1
    posInitY += 1
    console.log( `posInitX: ${posInitX}  posInitY: ${posInitY}` )
    cleanCanvas()
    context.fillRect( posInitX, posInitY, 30, 30 )
    if( posInitX <= posX.value && posInitY <= posY.value )
      slowMotion()
  }, 1 )
}

function cleanCanvas() {
  context.clearRect( 0, 0, canvas.width, canvas.height )
}





