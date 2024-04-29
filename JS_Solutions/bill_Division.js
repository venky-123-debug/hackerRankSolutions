

function bonAppetit(bill, k, b) {
  // Write your code here
  
  // Initialize variables to store total restaurant charge, real charge in Anna's half, and the amount Anna needs to pay or will be refunded
  let resturantCharge = 0; // Variable to store the total cost of all items ordered
  let realChargeInCarHalf = 0; // Variable to store the total cost of all items except the one Anna didn't eat, divided by 2
  let refund = 0; // Variable to store the difference between the amount Anna paid and the real charge in her half

  // Calculate total restaurant charge by summing up all the elements of the bill array
  resturantCharge = bill.reduce((x, y) => x + y, 0);
  console.log({resturantCharge});

  // Remove the item Anna didn't eat from the bill array
  bill.splice(k, 1);

  // Calculate real charge in Anna's half by summing up all the elements of the modified bill array and dividing the result by 2
  realChargeInCarHalf = bill.reduce((x, y) => x + y, 0);
  realChargeInCarHalf = realChargeInCarHalf / 2;

  // Check if Anna owes or needs a refund
  if (b !== realChargeInCarHalf) {
    // If Anna paid more or less than her fair share, calculate the difference and store it in refund
    refund = b - realChargeInCarHalf;
    console.log(refund);
  }

  // If Anna paid exactly the correct amount, log "Bon Appetit" to the console
  if (b === realChargeInCarHalf) {
    console.log("Bon Appetit");
  }
}

let bill= [ 3, 10, 2, 9 ]
let k= 1,b= 12 
bonAppetit(bill, k, b)
