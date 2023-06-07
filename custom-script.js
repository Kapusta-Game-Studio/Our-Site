
window.onresize = function curusel() {
     if( window.innerWidth <= 576 ) {
           document.getElementById('curusel-custom').style.display = 'flex';
           document.getElementById('tub-col-item-custom').style.display = 'none';
      } else {
           document.getElementById('curusel-custom').style.display = 'none';
           document.getElementById('tub-col-item-custom').style.display = 'flex';
     }}
