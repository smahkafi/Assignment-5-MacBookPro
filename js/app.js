// memory part start 
const memory8GBButton = document.getElementById('momory-8gb-btn');
const memory16GBButton = document.getElementById('memory-16gb-btn');
const memory8GBCost = document.getElementById('extra-memory-cost')
const memory16GBCost = document.getElementById('extra-memory-cost')

memory8GBButton.addEventListener('click', function(){
    memory8GBCost.innerText = '0';
    update()
})

memory16GBButton.addEventListener('click', function(){
    memory16GBCost.innerText = '180';
    update()
})
// memory part end 

// storage part start 
const ssd256GBButton = document.getElementById('ssd-256gb-btn')
const ssd512GBButton = document.getElementById('ssd-512gb-btn')
const ssd1TBButton = document.getElementById('ssd-1tb-btn')

const ssd256GBCost = document.getElementById('extra-storage-cost')
const ssd512GBCost = document.getElementById('extra-storage-cost')
const ssd1TBCost = document.getElementById('extra-storage-cost')

ssd256GBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '0';
    update()
})

ssd512GBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '100';
    update()
})

ssd1TBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '180';
    update()
})
// storage part end 

// delivery option start 
const deliveryFreeButton = document.getElementById('delivery-free-btn');
const deliveryChargeButton = document.getElementById('delivery-charge-btn');

const deliveryFreeCost = document.getElementById('delivery-cost');
const deliveryChargeCost = document.getElementById('delivery-cost');

deliveryFreeButton.addEventListener('click', function(){
    deliveryFreeCost.innerText = '0';
    update()    
})

deliveryChargeButton.addEventListener('click', function(){
    deliveryChargeCost.innerText = 20;
    update()
})
// delivery option start 


// update function 
function update(){
    
let bestPrice =Number( document.getElementById('best-price').innerText);

let extraMemoryCost =Number( document.getElementById('extra-memory-cost').innerText);

let extraStorageCost =Number( document.getElementById('extra-storage-cost').innerText);

let deliveryCost =Number( document.getElementById('delivery-cost').innerText);

let subTotalPrice = document.getElementById('subtotal-cost');
let inTotalPrice = document.getElementById('intotal');

subTotalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
inTotalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
}
// update function end


// promo coupon code function 
document.getElementById('coupon').addEventListener('click', function () {
    let subTotalPrice = document.getElementById('subtotal-cost');
    let inTotal = document.getElementById('intotal');
    let inputPromoCode = document.getElementById('promoinput');
    let valuePromoCode = inputPromoCode.value;
    let totalAmount = Number(subTotalPrice.innerText);
    if (valuePromoCode == 'stevekaku') {
        let discount = (totalAmount / 100) * 20;  
        inTotal.innerText = totalAmount - discount;
    }
        inputPromoCode.value = ''; })
