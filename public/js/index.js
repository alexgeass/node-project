function reloj() {
    HoraActual = new Date();

    console.log(HoraActual);

    const hora = document.getElementById("hora");

    hora.innerHTML = HoraActual;
    setTimeout("reloj()", 1000)
}


