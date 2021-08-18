const marsCost = 5000;
const moonCost = 3000;

function handleInput (planet,operator) {
    const quantityValue = document.getElementById(planet+'-input').value;
    let quantity = parseInt(quantityValue);
    if(operator == 'plus' ){
        quantity++;
    }
    else{
        if(quantity<1){
            return;
        }
        quantity--;
    }
    document.getElementById(planet+'-input').value = quantity;

}