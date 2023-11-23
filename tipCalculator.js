// Calculates the tip you need to pay. You put your total for money and tip percent in tip.
const price = (money, tip) => {
    let totalTip = money * tip / 100
    return (`Your tip should be ${totalTip.toFixed(2)}$`)
};

// Calls the function.
console.log(price(132, 15));