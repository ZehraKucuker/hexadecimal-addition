function addition() {

    var hexa1 = document.getElementById("hexa1").value;
    var hexa2 = document.getElementById("hexa2").value;

    if (hexa1.length > 250 || hexa2.length > 250) {
        alert("Girilen değerler 250 karakterden uzundur!!!");
        return;
    }

    var value1 = BigInt("0x" + hexa1);
    var value2 = BigInt("0x" + hexa2);
    var result = (value1 + value2).toString(16).toUpperCase();

    document.getElementById("result").value = result;

}
