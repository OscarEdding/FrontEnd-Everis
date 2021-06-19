// Crear una interface llamada "Figura"
// Esta interface tiene 2 métodos abstractos que son: CalcularPerimetro y CalcularArea
// Defina 2 Clases que implemente la interface ("Circulo", "Rectangulo", "Triangulo")
// Crear 2 objetos y ejecutar sus métodos.
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.CalcularPerimetro = function () {
        this.resultado = 4 * this.lado;
        console.log("Perimetro: " + this.resultado);
    };
    Cuadrado.prototype.CalcularArea = function () {
        this.resultado = 2 * this.lado;
        console.log("Perimetro: " + this.resultado);
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }
    Rectangulo.prototype.CalcularPerimetro = function () {
        this.resultado = 2 * (this.largo + this.ancho);
        console.log("Perimetro: " + this.resultado);
    };
    Rectangulo.prototype.CalcularArea = function () {
        this.resultado = 2 * (this.largo + this.ancho);
        console.log("Perimetro: " + this.resultado);
    };
    return Rectangulo;
}());
var figura1 = new Cuadrado(4);
figura1.CalcularPerimetro();
figura1.CalcularArea();
var figura2 = new Rectangulo(10, 5);
figura2.CalcularPerimetro();
figura2.CalcularArea();
