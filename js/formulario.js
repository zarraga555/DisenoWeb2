function validacion() {

    var nomb = document.getElementById("nombre").value;
    var email = document.getElementById("correo").value;
    var telefon = document.getElementById("telefono").value;
    var exprecionRegularCoreo = /\w+@\w+\.+[a-z]/;
    var nombre =/[a-z]/;

    if (nomb === "" ||  email === "" || telefon === "") {
        alert("Todos los Datos son obligatorios");
        return false;
    }else if(!nombre.test(nomb))
        {
            alert("ERROR DE NOMBRE ingrese solo letras ");
            return false;  
        }   
     else if (!exprecionRegularCoreo.test(email)) {
        alert("ERROR DE CORREO no es valido ingrese correctamente EJEMPLO: usuario123@gmail.com");
        return false;
    } else if (isNaN(telefon)) {
        alert("ERROR DE TELEFONO ingrese solo Numeros");
        return false;
    }
}