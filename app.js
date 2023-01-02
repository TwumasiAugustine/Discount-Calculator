const btn = document.getElementById('calculate');

let bill = document.getElementById('amount');
let discount = document.getElementById('discount');
let discountAmount = document.getElementById('discount-given');
let finalAmount = document.getElementById('final-bill');

    

btn.addEventListener('click', () => {
    billValue = bill.value;
    discountValue = discount.value;

    let discountGiven =  (billValue * discountValue/100).toFixed(2);
    let remainingAmount = (billValue - discountGiven).toFixed(2);

    discountAmount.innerHTML = "$ " +  discountGiven;
    finalAmount.innerHTML = "$ " + remainingAmount
    }
);

const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', () => {
    bill.value = "";
    discount.value = "";
    finalAmount.innerHTML = "$ 0.00"
    discountAmount.innerHTML = "$ 0.00"
})