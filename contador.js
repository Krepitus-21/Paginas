var contador = 0;

function cuenta(){
    this.contador = this.contador + 1;
    document.getElementById("cont").innerHTML = contador;
}