// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) { 
    let profit = (sellingPrice - costPrice) * unitsSold // Finds profit by subtracing selling price from cost price and multiplying difference by units sold
    console.log(`Total Profit: $${profit}`) // Outputs total profit
    return profit // Returns profit
}; // Declares function that calculates profit
calculateProfit(20,30,100); // Inputs values and produces expected output of $1000 as shown in test data
calculateProfit(50,70,200); // Inputs values and produces expected output of $4000 as shown in test data

// Task 2: Sales Tax Consumption
function calculateSalesTax(amount, taxrate) {
    let salesTax = amount * taxrate // Finds sales tax by multiplying amount by tax rate
    console.log(`Sales Tax: $${Math.floor(salesTax)}`) // Outputs sales tax and rounds it
    return salesTax // Returns sales tax
}; // Declares a function that calculates sales tax
calculateSalesTax(100,0.07); // Inputs values and produces expected output of $7 as shown in test data
calculateSalesTax(500,0.1); // Inputs values and produces expected output of $50 as shown in test data


