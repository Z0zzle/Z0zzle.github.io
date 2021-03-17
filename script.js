var Kitzler = document.getElementById('Kitzler');
var PrallesDing = document.getElementById('PrallesDing');
var Eichelzoom = document.getElementById('Eichelzoom');

Eichelzoom.style.display = 'none';

Kitzler.onchange = function () {
  if (Kitzler.checked) {
    Eichelzoom.style.display = 'block';
    PrallesDing.style.display = 'none';
  } else {
    PrallesDing.style.display = 'block';
    Eichelzoom.style.display = 'none';

  }
};