// A list of food that the user wants to eat.
const foods = ['pizza', 'burger', 'sandwich', 'pie', 'avocado', 'ramen bowl', 'apple'];

// Generates a random number used for choosing a food item.
const numberGenerator = () => {
    const random = Math.floor(Math.random() * foods.length);
    console.log(`You should eat ${foods[random]}`);
};

// Calls the numberGenerator function.
numberGenerator()