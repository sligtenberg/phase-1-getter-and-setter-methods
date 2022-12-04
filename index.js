// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * this.radius * this.radius
    }

    set diameter(diameter) {
        this.radius = 0.5 * diameter
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI)
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}

const roundGuy = new Circle(3)

console.log(roundGuy)
console.log("radius: ", roundGuy.radius)
console.log("diameter: ", roundGuy.diameter)
console.log("Circumference: ", roundGuy.circumference)
console.log("Area: ", roundGuy.area)

roundGuy.diameter = 2

console.log(roundGuy)
console.log("radius: ", roundGuy.radius)
console.log("diameter: ", roundGuy.diameter)
console.log("Circumference: ", roundGuy.circumference)
console.log("Area: ", roundGuy.area)