// Crear una interface llamada "Figura"
// Esta interface tiene 2 métodos abstractos que son: CalcularPerimetro y CalcularArea
// Defina 2 Clases que implemente la interface ("Circulo", "Rectangulo", "Triangulo")
// Crear 2 objetos y ejecutar sus métodos.

interface Figura {
    CalcularPerimetro(): void;
    CalcularArea(): void;

}


class Cuadrado implements Figura {
    lado: number;
    resultado: number;

    constructor(lado:number) {
        this.lado = lado;
    }
    
    CalcularPerimetro() {
        this.resultado = 4*this.lado;
        console.log(`Perimetro: ${this.resultado}`);
    }

    CalcularArea() {
        this.resultado = 2*this.lado;
        console.log(`Perimetro: ${this.resultado}`);
    }
}

class Rectangulo implements Figura {
    largo: number;
    ancho: number;
    resultado: number;

    constructor(largo: number, ancho: number) {
        this.largo = largo;
        this.ancho = ancho;
    }
    
    CalcularPerimetro() {
        this.resultado = 2*(this.largo+this.ancho);
        console.log(`Perimetro: ${this.resultado}`);
    }

    CalcularArea() {
        this.resultado = 2*(this.largo+this.ancho);
        console.log(`Perimetro: ${this.resultado}`);
    }
}

let figura1 = new Cuadrado(4);
figura1.CalcularPerimetro();
figura1.CalcularArea();

let figura2 = new Rectangulo(10, 5);
figura2.CalcularPerimetro();
figura2.CalcularArea();