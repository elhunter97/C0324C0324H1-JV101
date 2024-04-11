function calculator() {
    let r = parseInt(document.getElementById("r").value);
    let area = r*r*3.14;
    let peri = 2*r*3.14;
    document.getElementById("area").innerHTML = 'area = '+area+'cm2';
    document.getElementById("perimeter").innerHTML = 'perimeter = '+peri+'cm';
}