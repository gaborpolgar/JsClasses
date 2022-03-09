class Meal {
    name;
    price;
    chategory;
    ingredients;

    constructor(name, price, chategory, ingredients) {
        this.name = name;
        this.price = price;
        this.chategory = chategory;
        this.ingredients = ingredients;
    }

    toString() {
        return `Az étel neve: ${this.name}, ára: ${this.price}, kategóriája: ${this.chategory}, összetevője: ${this.ingredients}\n`;
    }



}