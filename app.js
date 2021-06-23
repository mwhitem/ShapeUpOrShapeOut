let circleBtn = document.getElementById('circle-button');
let triangleBtn = document.getElementById('triangle-button');
let rectangleBtn = document.getElementById('rectangle-button');
let squareBtn = document.getElementById('square-button');
let shapeOutput = document.getElementById('shape-output');
let circleDiv = document.createElement('div');
let triangleDiv = document.createElement('div');
let squareDiv = document.createElement('div');
let rectangleDiv = document.createElement('div');
let shapeName = document.getElementById('output-shape-name');
let widthOutput = document.getElementById('output-width');
let heightOutput = document.getElementById('output-height');
let radiusOutput = document.getElementById('output-radius')
let areaOutput = document.getElementById('output-area');
let perimeterOutput = document.getElementById('output-perimeter');

class Shape {
constructor(height, weight) {
    this.height = height;
    this.weight = weight;
}
}

class Circle extends Shape {
    constructor(radius) {
    super()
        this.radius = radius;
    }
    getCircleArea() {
        this.radius = document.getElementById("circle-input-box").value;
        let areaResult = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 400);
        console.log(areaResult);        
        circleDiv.style.borderRadius = `${this.radius}%`;
        circleDiv.style.backgroundColor = 'purple';
        circleDiv.style.height = `${this.radius}px`;     
        circleDiv.style.width = `${this.radius}px`;
        circleDiv.style.position = 'absolute';
        circleDiv.style.top = `${x}px`;
        circleDiv.style.left = `${y}px`;
        shapeOutput.appendChild(circleDiv);
    }
    getCirclePerimeter() {
        this.radius = document.getElementById("circle-input-box").value;
        let perimeterResult = (2 * Math.PI * this.radius).toFixed(2);
        console.log(perimeterResult);
        circleDiv.style.borderRadius = `${perimeterResult}%`;
        shapeOutput.appendChild(circleDiv);
    }
    describeCircle() {
        let areaResult = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        let perimeterResult = (2 * Math.PI * this.radius).toFixed(2);
        circleDiv.addEventListener('click', () => {
            shapeName.innerText = 'Shape Name: Circle';
            widthOutput.innerText = 'Width: n/a';
            heightOutput.innerText = 'Height: n/a';
            radiusOutput.innerText = `Radius: ${this.radius}`
            areaOutput.innerText = `Area: ${areaResult}`;
            perimeterOutput.innerText = `Perimeter: ${perimeterResult}`
        })
        
    }
    removeCircle() {
        circleDiv.addEventListener('dblclick', () => {
        circleDiv.remove();
        shapeName.innerText = 'Shape Name';
        widthOutput.innerText = 'Width';
        heightOutput.innerText = 'Height';
        radiusOutput.innerText = 'Radius';
        areaOutput.innerText = 'Area';
        perimeterOutput.innerText = 'Perimeter'

        })
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height)
    }
    getTriangleArea() {
        this.height = document.getElementById('triangle-input-box').value;
       let triangleAreaResult = 0.5 * this.height * this.height;
       let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 400);
       console.log(triangleAreaResult);
       triangleDiv.style.height = '0';
       triangleDiv.style.width = '0';
       triangleDiv.style.position = 'absolute';
       triangleDiv.style.top = `${x}px`;
       triangleDiv.style.left = `${y}px`;

       shapeOutput.appendChild(triangleDiv);
    }
    getTrianglePerimeter() {
let trianglePerimeterResult = 2 * this.height + (Math.sqrt(2)) * this.height;
console.log(trianglePerimeterResult);

triangleDiv.style.borderRight = `${this.height}px solid transparent`;
triangleDiv.style.borderBottom = `${this.height}px solid yellow`;
triangleDiv.style.position = 'absolute';
shapeOutput.appendChild(triangleDiv);
    }
    describeTriangle() {
        let triangleAreaResult = 0.5 * this.height * this.height;
        let trianglePerimeterResult = 2 * this.height + (Math.sqrt(2)) * this.height;
        triangleDiv.addEventListener('click', () => {
            shapeName.innerText = 'Shape Name: Triangle'
            widthOutput.innerText = `Width: ${this.height}`;
            heightOutput.innerText = `Height: ${this.height}`;
            radiusOutput.innerText = 'Radius: n/a';
              areaOutput.innerText = `Area: ${triangleAreaResult}`;
              perimeterOutput.innerText = `Perimeter: ${trianglePerimeterResult}`
        })
    }
    removeTriangle() {
        triangleDiv.addEventListener('dblclick', () => {
        triangleDiv.remove();
        shapeName.innerText = 'Shape Name';
        widthOutput.innerText = 'Width';
        heightOutput.innerText = 'Height';
        radiusOutput.innerText = 'Radius';
        areaOutput.innerText = 'Area';
        perimeterOutput.innerText = 'Perimeter'

        })
    }

}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
    }
    getRectangleArea() {
        this.height = document.getElementById('height-rectangle-input').value;
        this.width = document.getElementById('width-rectangle-input').value;
        let rectangleAreaResult = this.height * this.width;
        let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 400);
        console.log(rectangleAreaResult);
        rectangleDiv.style.height = `${this.height}px`;
        rectangleDiv.style.width = `${this.width}px`;
        rectangleDiv.style.backgroundColor = 'green';
        rectangleDiv.style.position = 'absolute';
        rectangleDiv.style.top = `${x}px`;
        rectangleDiv.style.left = `${y}px`;


        shapeOutput.appendChild(rectangleDiv);
    }
    getRectanglePerimeter() {
        this.height = document.getElementById('height-rectangle-input').value;
        this.width = document.getElementById('width-rectangle-input').value;
let rectanglePerimeterResult = 2 * (this.height * this.width);
console.log(rectanglePerimeterResult);

    }
    describeRectangle() {
        let rectangleAreaResult = this.height * this.width;
        let rectanglePerimeterResult = 2 * (this.height * this.width);

        rectangleDiv.addEventListener('click', () => {
            shapeName.innerText = 'Shape Name: Rectangle'
            widthOutput.innerText = `Width: ${this.width}`;
            heightOutput.innerText = `Height: ${this.height}`;
            radiusOutput.innerText = 'Radius: n/a'
            areaOutput.innerText = `Area: ${rectangleAreaResult}`;
            perimeterOutput.innerText = `Perimeter: ${rectanglePerimeterResult}`
        })
    }
    removeRectangle() {
        rectangleDiv.addEventListener('dblclick', () => {
        rectangleDiv.remove();
        shapeName.innerText = 'Shape Name';
        widthOutput.innerText = 'Width';
        heightOutput.innerText = 'Height';
        radiusOutput.innerText = 'Radius';
        areaOutput.innerText = 'Area';
        perimeterOutput.innerText = 'Perimeter'

        })
    }

}


class Square extends Shape {
    constructor(sideLength) {
        super()
        this.sideLength = sideLength;
    }
    getSquareArea() {
        this.sideLength = document.getElementById('side-length-square-input').value;
        let squareAreaResult = Math.pow(this.sideLength, 2);
        console.log(squareAreaResult);
        let x = Math.floor(Math.random() * 400);
        let y = Math.floor(Math.random() * 400);
        squareDiv.style.height = `${this.sideLength}px`;
        squareDiv.style.width = `${this.sideLength}px`;
        squareDiv.style.backgroundColor = 'red';
        squareDiv.style.position = 'absolute';
        squareDiv.style.top = `${x}px`;
        squareDiv.style.left = `${y}px`;
        shapeOutput.appendChild(squareDiv);
    }
    getSquarePerimeter() {
        this.sideLength = document.getElementById('side-length-square-input').value;
let squarePerimeterResult = 4 * this.sideLength;
console.log(squarePerimeterResult);

    }
    describeSquare() {
        let squareAreaResult = Math.pow(this.sideLength, 2)
        let squarePerimeterResult = 4 * this.sideLength;

        squareDiv.addEventListener('click', () => {
            shapeName.innerText = 'Shape Name: Square';
            widthOutput.innerText = `Width: ${this.sideLength}`;
            heightOutput.innerText = `Width: ${this.sideLength}`;
            radiusOutput.innerText = 'Radius: n/a'
            areaOutput.innerText = `Area: ${squareAreaResult}`;
            perimeterOutput.innerText = `Perimeter: ${squarePerimeterResult}`
        })
    }
    removeSquare() {
        squareDiv.addEventListener('dblclick', () => {
        squareDiv.remove();
        shapeName.innerText = 'Shape Name';
        widthOutput.innerText = 'Width';
        heightOutput.innerText = 'Height';
        radiusOutput.innerText = 'Radius';
        areaOutput.innerText = 'Area';
        perimeterOutput.innerText = 'Perimeter'

        })
    }

}

circleBtn.addEventListener('click', () => {
    let circle = new Circle();
    circle.getCircleArea();
    circle.getCirclePerimeter();
    circle.describeCircle();
    circle.removeCircle();
})

triangleBtn.addEventListener('click', () => {
    let triangle = new Triangle();
    triangle.getTriangleArea();
    triangle.getTrianglePerimeter();
    triangle.describeTriangle();
    triangle.removeTriangle();
})

rectangleBtn.addEventListener('click', () => {
    let rectangle = new Rectangle();
    rectangle.getRectangleArea();
    rectangle.getRectanglePerimeter();
    rectangle.describeRectangle();
    rectangle.removeRectangle();
})

squareBtn.addEventListener('click', () => {
    let square = new Square();
    square.getSquareArea();
    square.getSquarePerimeter();
    square.describeSquare();
    square.removeSquare();
})