let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

// context.beginPath();
// context.strokeStyle = '#FF0000';
// context.moveTo(300, 250);
// context.lineTo(100, 200);
// context.lineWidth = 10;
// context.stroke();
// context.closePath();

context.beginPath();
context.strokeStyle = '#0000FF';
context.moveTo(300, 100);
context.lineTo(50, 100);
context.lineTo(25, 50);
context.lineWidth = 5;
context.stroke();
context.closePath();