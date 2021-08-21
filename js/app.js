
const memory8GBButton = document.getElementById('momory-8gb-btn');
const memory16GBButton = document.getElementById('memory-16gb-btn');
const memory8GBcost = document.getElementById('extra-memory-cost')
const memory16GBcost = document.getElementById('extra-memory-cost')

memory8GBButton.addEventListener('click', function(){
    memory8GBcost.innerText = 6;
})
memory16GBButton.addEventListener('click', function(){
    memory16GBcost.innerText = 5;
})