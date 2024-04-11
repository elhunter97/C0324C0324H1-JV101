// var physics = parseInt(document.getElementById("physics").value);
// var chemistry = parseInt(document.getElementById("chemistry").value);
// var biology = parseInt(document.getElementById("biology").value);
// var avr = (physics + chemistry + biology)/3;
// var sum = physics + chemistry + biology;
function cal(){
    let physics = parseInt(document.getElementById("physics").value);
    let chemistry = parseInt(document.getElementById("chemistry").value);
    let biology = parseInt(document.getElementById("biology").value);
    let avr = (physics + chemistry + biology)/3;
    let sum = physics + chemistry + biology;
    document.getElementById("avr").innerHTML ='avr = ' +avr;
    document.getElementById("sum").innerHTML = 'sum = '+sum;
}