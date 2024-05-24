let bill = 100;
let tip = (bill < 50) ? bill * 0.2 : (bill <=300) ? bill * 0.15 : bill * 0.2;

console.log(tip); 

let total = bill + tip;
console.log('The tab was $${bill}, the tip was $${tip.toFixed(2)}, and the total tab $${total.toFixed(2)}');

function calcTip(bill) {
    return (bill < 50) ? bill * 0.2 : (bill <=300) ? bill *0.15 : bill * 0.2;
}

calcTip(bill);
console.log('The bill was $${bill}, the tip is $${tip,toFixed(2)}');

let bills = [275, 40, 430];
let bill2 = [125, 555, 44];

let tips = bills.map(calcTip);
let tip2 = bill2.map(calcTip);

let totals = bills.map((bill, index) => bill + tips[index]);
let total2 = bill2.map((bill, index) => bill + tip2[index]);

console.log("Bills: ", bills);
console.log("Tips; ", tips.map(tip => tip,toFixed(2)));
console.log("Totals: ", totals.map(total => total.toFixed(2)));

console.log("Bills 2: ", bill2);
console.log("Tip 2; ", tip2.map(tip => tip2,toFixed(2)));
console.log("Totals 2: ", total2.map(total => total2.toFixed(2)));