
// memory part start 
const memory8GBButton = document.getElementById('momory-8gb-btn');
const memory16GBButton = document.getElementById('memory-16gb-btn');
const memory8GBCost = document.getElementById('extra-memory-cost')
const memory16GBCost = document.getElementById('extra-memory-cost')

memory8GBButton.addEventListener('click', function(){
    memory8GBCost.innerText = '0';
})
memory16GBButton.addEventListener('click', function(){
    memory16GBCost.innerText = '180';
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
})
ssd512GBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '100';
})
ssd1TBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '180';
})
// storage part end 

// delivery option start 
const deliveryFreeButton = document.getElementById('delivery-free-btn');
const deliveryChargeButton = document.getElementById('delivery-charge-btn');

const deliveryFreeCost = document.getElementById('delivery-cost');
const deliveryChargeCost = document.getElementById('delivery-cost');

deliveryFreeButton.addEventListener('click', function(){
    deliveryFreeCost.innerText = '0';
})
deliveryChargeButton.addEventListener('click', function(){
    deliveryChargeCost.innerText = '20';
})
// delivery option end 

