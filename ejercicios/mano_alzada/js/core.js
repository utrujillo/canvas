(function(){
  let canvas, context, point

  // Funciones
  function init() {
    point = {
      drag: { x: 0, y:0},
      canDraw: false
    }
  }

  function dragStart(e){
    // context.clearRect(0,0, canvas.width, canvas.height)
    context.beginPath()
    e = mousePos(e)
    point.canDraw = true
  }

  function dragging(e){
    if(point.canDraw){
      e = mousePos(e)
      point.drag.x = e.x
      point.drag.y = e.y

      context.lineTo(point.drag.x, point.drag.y)
      context.stroke()
    }
  }

  function dragEnd(){
    point.canDraw = false
  }

  function mousePos(event){
    event = event ? event : window.event
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop
    }
  }

  
  canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d')
  
  // Event handlers
  canvas.onmousedown = dragStart
  canvas.onmousemove = dragging
  canvas.onmouseup = dragEnd

  init()
})()