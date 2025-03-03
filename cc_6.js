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
calculateBonus(5000, "Excellent"); // Inputs values and produces expected output of $1000 as shown in test data
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

// Task 6: Higher-Order Functions for Bulk Orders
let orders = [200, 600, 1200, 450, 800];
const applyBulkDiscount = (orders, discountFunction) => {
    let discount = orders.map(discountFunction) // Applies discount function to each order
    console.log(`Expected Output: ${discount}`) // Outputs expected discounts
} // Declares function to apply bulk discount
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Inputs values and applies 10% discount if amount is greater than $500. Produces expected outputs of [200, 540, 1080, 450, 720] as shown in test data

// Task 7: Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0; // Declares total expense as a variable
    return function (expense) {
        totalExpenses += expense // Adds expense to total expenses
        return totalExpenses // Returns updated total expenses
    }; // Declares function that updates total expenses
}; // Declares function that tracks expenses
let tracker = createExpenseTracker(); // Declares tracker variable by returning createExpenseTracker function
console.log(`Total Expenses: ${tracker(200)}`); // Outputs total expenses of $200 as shown in test data
console.log(`Total Expenses: ${tracker(150)}`); // Outputs updated total expenses of $350 as shown in test data

// Task 8: Employee Promotion Evaluation
function calculateYearsToPromotion (employeeLevel) {
    let yearsLeft = (10 - employeeLevel) * 2; // Calculates years left by subtracting level by 10 and multiplying it by 2 
    if (employeeLevel >= 10) { // If employee is >= 10, outputs level 10 reached 
        console.log(`Level 10 Reached`); // Outputs level 10 reached
    } else {  // If employee is less than 10, outputs years left
        console.log(`Years to Level 10: ${yearsLeft}`); // Outputs years left
        return yearsLeft; // Returns years left
    }; 
}; // Declares function to calculate years to promotion
calculateYearsToPromotion(7); // Inputs value and outputs years left as 6 as shown in test data
calculateYearsToPromotion(5); // Inputs valye and outputs years left as 10 as shown in test data

