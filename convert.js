
function convert() {
    v1= parseFloat(document.getElementById('v1').value);
    sel1= parseInt(document.getElementById('sel1').value);
    sel2= parseInt(document.getElementById('sel2').value);

    if (sel1 == 1 && sel2 == 1) {
      result.innerText= v1.toFixed(4) + " PLN";
    } else if (sel1 == 2 && sel2 == 2) {
      result.innerText= v1.toFixed(4) + " EUR";
    }
    else if (sel1 == 3 && sel2 == 3) {
      result.innerText= v1.toFixed(4) + " USD";
    }
    else if (sel1 == 1 && sel2 == 2) {
      v1= v1 * 0.22297;
      result.innerText= v1.toFixed(4) + " EUR";
    }
    else if (sel1 == 1 && sel2 == 3) {
      v1= v1 * 0.27015;
      result.innerText= v1.toFixed(4) + " USD";
    }
    else if (sel1 == 2 && sel2 == 1) {
      v1 = v1 * 4.48495;
      result.innerText= v1.toFixed(4) +" PLN";
    }
    else if (sel1 == 2 && sel2 == 3) {
      v1 = v1 * 1.21170;
      result.innerText= v1.toFixed(4) + " USD";
    }
    else if (sel1 == 3 && sel2 == 1) {
      v1 = v1 * 3.70170;
      result.innerText= v1.toFixed(4) +" PLN";
    }
    else if (sel1 == 3 && sel2 == 2) {
      v1 = v1 * 0.82530;
      result.innerText= v1.toFixed(4) + " EUR";
    }
   
    // result.innerText= sel1.toFixed(4);
  }
  
  