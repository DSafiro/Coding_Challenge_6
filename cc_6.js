// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) { 
    let profit = (sellingPrice - costPrice) * unitsSold // Finds profit by subtracing selling price from cost price and multiplying difference by units sold
    console.log(`Total Profit: $${profit}`) // Outputs total profit
    return profit // Returns profit
}; // Declares function that calculates profit
calculateProfit(20,30,100) // Inputs values and produces expected output of $1000
calculateProfit(50,70,200) // Inputs values and produces expected output of $4000