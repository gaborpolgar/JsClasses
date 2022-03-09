let meals = [];
document.getElementById("bt").addEventListener('click', () => {
    
    let name = document.forms["meal_gen"]["name"].value;
    let price = document.forms["meal_gen"]["price"].value;
    let chategory = document.forms["meal_gen"]["chategory"].value;
    let ingredients = document.forms["meal_gen"]["ingredients"].value;
    meals.push(new Meal(name, price, chategory, ingredients)); 
    
    document.getElementById("result").innerText = meals;
})