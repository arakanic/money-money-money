// Given yearly interest paid, a tax rate, the principal and desired sums, this function returns the number of years in integers needed for Mr. Scrooge to get a desired sum of money.


// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired) {
      principal += (principal * interest) * (1 - tax)
      years++
    }
    return years
}

calculateYears(1000, 0.05, 0.18, 1100)
calculateYears(1000,0.01625,0.18,1200)
calculateYears(1000,0.05,0.18,1000)