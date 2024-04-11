function convert(){
    let cel = +document.getElementById("c").value;
    let f = (9*cel/5)+32;
    document.getElementById("result").innerHTML = "Result:"+f;
}