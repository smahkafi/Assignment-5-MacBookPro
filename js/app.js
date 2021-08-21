
// memory part start 
const memory8GBButton = document.getElementById('momory-8gb-btn');
const memory16GBButton = document.getElementById('memory-16gb-btn');
const memory8GBCost = document.getElementById('extra-memory-cost')
const memory16GBCost = document.getElementById('extra-memory-cost')

memory8GBButton.addEventListener('click', function(){
    memory8GBCost.innerText = '0';
    parseInt(memory8GB())
})
memory16GBButton.addEventListener('click', function(){
    memory16GBCost.innerText = '180';
    memory16GB()
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
    ssd256()
    
})
ssd512GBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '100';
    ssd512()
    
})
ssd1TBButton.addEventListener('click', function(){
    ssd256GBCost.innerText = '180';
    ssd1TB()
    
})
// storage part end 

// delivery option start 
const deliveryFreeButton = document.getElementById('delivery-free-btn');
const deliveryChargeButton = document.getElementById('delivery-charge-btn');

const deliveryFreeCost = document.getElementById('delivery-cost');
const deliveryChargeCost = document.getElementById('delivery-cost');

deliveryFreeButton.addEventListener('click', function(){
    deliveryFreeCost.innerText = '0';
    freeCost()
    
})
deliveryChargeButton.addEventListener('click', function(){
    deliveryChargeCost.innerText = '20';
    chargeCost()
    
})

const productMainPrice = document.getElementById('price')
const productPrice = productMainPrice.innerText;


function memory8GB(){
    console.log(productPrice, memory8GBCost.innerText)
}
function memory16GB(){
    console.log(productPrice, memory16GBCost.innerText)
}
function ssd256(){
    console.log(productPrice, ssd256GBCost.innerText)
}
function ssd512(){
    console.log(productPrice, ssd512GBCost.innerText)
}
function ssd1TB(){
    console.log(productPrice, ssd1TBCost.innerText)
}
function freeCost(){
    console.log(productPrice, deliveryFreeCost.innerText)
}
function chargeCost(){
    console.log(productPrice, deliveryFreeCost.innerText )
}


// total amount
const totalAmount = document.getElementById('total-cost')
let MainAmount = parseFloat(totalAmount.innerText)

MainAmount = Number(memory8GB()) + Number(memory16GB());





// // delivery option end 

// // total cost start 
// const totalCost = document.getElementById('total-cost')
// console.log(totalCost)
// // const mainCost = parseInt(totalCost.innerText) + deliveryChargeCost.innerText;

// // // update total 
// // function updatetotal(){
// //    console.log(deliveryFreeCost.innerText, )
// // }