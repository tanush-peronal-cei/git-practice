async function getHeading() {
    const url = "http://127.0.0.1:3000/"

    const response = await fetch(url)

    const data = await response.json();
    document.getElementById('heading').innerText = data.data
}

function getColor() {
    const color = document.getElementById('colorInput').value
    document.getElementById('colorInput').value = ''

    if (color == '') {
        alert("'Enter a color' field is empty")
    }
    return color
}

class Vehicle {
    constructor(color) {
        this.color = color
    }
    async hasEngine(vehicleName) {
        if (this.color == '') {
            return
        }
        const response = await fetch(this.apiBaseUrl)

        const data = await response.json();

        const previoudData = document.getElementById('output').innerText
        document.getElementById('output').innerText = previoudData + `\n ${this.color} ${vehicleName} ` +  data.data 
    }
}

class Car extends Vehicle {
    constructor(color) {
        super(color)
        this.apiBaseUrl = `http://127.0.0.1:3000/car`
        this.vehicleName = "car"
    }

    async hasEngine() {
        await super.hasEngine(this.vehicleName);
    }
}

class Cycle extends Vehicle {
    constructor(color) {
        super(color)
        this.apiBaseUrl = `http://127.0.0.1:3000/cycle`
        this.vehicleName = "cycle"
    }

    async hasEngine() {
        await super.hasEngine(this.vehicleName);
    }
}

class Aeroplane extends Vehicle {
    constructor(color) {
        super(color)
        this.apiBaseUrl = `http://127.0.0.1:3000/aeroplane`
        this.vehicleName = "aeroplane"
    }

    async hasEngine() {
        await super.hasEngine(this.vehicleName);
    }
}

async function createCar() {
    const color = getColor()
    const newCar = new Car(color);
    newCar.hasEngine()
}

async function createCycle() {
    const color = getColor()
    const newCycle = new Cycle(color);
    newCycle.hasEngine()
}

async function createAeroplane() {
    const color = getColor()
    const newAeroplane = new Aeroplane(color);
    newAeroplane.hasEngine()
}