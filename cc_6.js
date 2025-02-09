// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) { 
    let profit = (sellingPrice - costPrice) * unitsSold; // Finds profit by subtracing selling price from cost price and multiplying difference by units sold
    console.log(`Total Profit: $${profit}`); // Outputs total profit
    return profit; // Returns profit
}; // Declares function that calculates profit
calculateProfit(20,30,100); // Inputs values and produces expected output of $1000 as shown in test data
calculateProfit(50,70,200); // Inputs values and produces expected output of $4000 as shown in test data

// Task 2: Sales Tax Consumption
function calculateSalesTax(amount, taxrate) {
    let salesTax = amount * taxrate; // Finds sales tax by multiplying amount by tax rate
    console.log(`Sales Tax: $${Math.floor(salesTax)}`); // Outputs sales tax and rounds it
    return salesTax; // Returns sales tax
}; // Declares a function that calculates sales tax
calculateSalesTax(100,0.07); // Inputs values and produces expected output of $7 as shown in test data
calculateSalesTax(500,0.1); // Inputs values and produces expected output of $50 as shown in test data

// Task 3: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating === "Excellent") { // If performance rating equals "Excellent" -> bonus is 20% of salary
        bonus = salary * 0.20
    } else if (performanceRating === "Good") { // If performance rating equals "Good" -> bonus is 10% of salary
        bonus = salary * 0.10
    } else if (performanceRating === "Average") { // If bonus rating equals "Average" -> bonus is 5% of salary
        bonus = salary * 0.05
    };
    console.log(`Bonus: $${bonus}`); // Outputs calculated bonus
}; // Declares arrow function to calculate bonus
calculateBonus(5000, "Excellent"); // Inputs values and produces expected output of $1000 aas shown in test data
calculateBonus(7000, "Good"); // Inputs values and produces expected output of $700 as shown in test data

// Task 4: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    if (plan === "Basic") { // If plan equals "Basic" -> cost is $10
        cost = 10
    } else if (plan === "Premium") { // If plan equals "Premium" -> cost is $20
        cost = 20
    } else if (plan === "Enterprise") { // If plan equals "Enterprise" -> cost is $30
        cost = 30
    }; 
    let totalCost = (cost * months) - discount; // Calculates total cost by multiplying cost by months and subtracting product by discount
    console.log(`Total Cost: $${totalCost}`); // Outputs total cost
    return totalCost; // Returns total cost
}; // Declares function to calculate subscription cost
calculateSubscriptionCost("Basic", 6, 10); // Inputs values and produces expected output of $50 as shown in test data
calculateSubscriptionCost("Premium", 12, 0); // Inputs values and produces expected output of $240 as shown in test data

// Task 5: Currency Conversion
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate; // Calculates converted amount by multiplying amount by exchange rate
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`); // Outputs converted amount and rounds by 2 decimal points
    return convertedAmount; // Returns converted amount
}; // Declares function that calculates converted currency
convertCurrency(100, 1.1); // Inputs values and produces expected output of $110.00 as shown in test data
convertCurrency(250, 0.85); // Inputs values and produces expected output of $212.50 as shown in test data