class Pont {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    tavolsagAzOrigotol() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static distance(b, a) {
        return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        if (x < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else {
            this.x = x;
        }
    }
    setY(y) {
            if (y < 0) {
                alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
            } else {
                this.y = y;
            }
        }
        //Szöveges megfeleltése
    toString() {
        return `Pont: x = ${this.x}, y = ${this.y}`;
    }
}