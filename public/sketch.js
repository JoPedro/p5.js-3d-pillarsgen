let cols, rows;
let scl = 20;
let w = 1500;
let h = 1500;
let zTable = [[]];

function setup() {
    createCanvas(800, 800, WEBGL);
    cols = w / scl;
    rows = h / scl;
    zTable = makeArray(cols, rows, 0);
    frameRate(24);
}

function draw() {
    background(0);

    //translate(width / 2, height / 2);
    translate(50, 150, 125);
    rotateX(PI / 3);

    translate(-width, -height);
    for (let y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            fill(15);
            stroke(255);
            vertex(x * scl, y * scl, zTable[x][y]);
            vertex(x * scl, (y + 1) * scl, zTable[x][y + 1]);
        }
        endShape();
    }

    setInterval(() => {
        let choice = Math.round(random(0, 1));
        choice == 1 ? modeA() : modeB();
    }, 2000);
}

function makeArray(w, h, val) {
    var arr = [];
    for (let i = 0; i < h; i++) {
        arr[i] = [];
        for (let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function modeA() {
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            zTable[x][y] = 0;
        }
    }
    
    for (let x = 0; x < rows; x += 7) {
        for (let y = 0; y < cols; y += 7) {
            let rand = random(0, 200);
            zTable[x][y] = rand;
            zTable[x + 1][y] = rand;
            zTable[x][y + 1] = rand;
            zTable[x + 1][y + 1] = rand;
            zTable[x + 2][y] = rand;
            zTable[x][y + 2] = rand;
            zTable[x + 1][y + 2] = rand;
            zTable[x + 2][y + 2] = rand;
            zTable[x + 2][y + 1] = rand;
            zTable[x + 3][y + 1] = rand;
            zTable[x + 3][y] = rand;
            zTable[x + 3][y - 1] = rand;
            zTable[x + 2][y - 1] = rand;
            zTable[x + 1][y - 1] = rand;
        }
    }
}

function modeB() {
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            zTable[x][y] = 0;
        }
    }

    for (let c = 0; c < rows; c += 7) {
        for (let r = 0; r < cols; r += 7) {
            let x = Math.round(random(0, 65));
            let y = Math.round(random(0, 50));
            let rand = random(0, 200);
            zTable[x][y] = rand;
            zTable[x + 1][y] = rand;
            zTable[x][y + 1] = rand;
            zTable[x + 1][y + 1] = rand;
            zTable[x + 2][y] = rand;
            zTable[x][y + 2] = rand;
            zTable[x + 1][y + 2] = rand;
            zTable[x + 2][y + 2] = rand;
            zTable[x + 2][y + 1] = rand;
            zTable[x + 3][y + 1] = rand;
            zTable[x + 3][y] = rand;
            zTable[x + 3][y - 1] = rand;
            zTable[x + 2][y - 1] = rand;
            zTable[x + 1][y - 1] = rand;
        }
    }
}