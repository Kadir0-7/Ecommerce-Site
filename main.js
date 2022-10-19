if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){
    let removeItem = document.getElementsByClassName("btn-danger")
    for(let i = 0; i < removeItem.length; i++){
    let btn = removeItem[i];
    btn.addEventListener('click', (e) => {
let btnClicks = e.target;
btnClicks.parentElement.parentElement.remove();
 UpdateCartPrice();
    })
}
}






function UpdateCartPrice() {

    let itemContainer = document.getElementsByClassName('cart-items')[0]
let cartRows = itemContainer.getElementsByClassName('cart-row')
total = 0
for(let i = 0; i < cartRows.length; i++){
    let cartRow = cartRows[i];
    let priceE = cartRow.getElementsByClassName('cart-price')[0]
    let quantityE = cartRow.getElementsByClassName('cart-quantity-input')[0]
let price = parseFloat(priceE.innerText.replace('$', ''));
let quantity = quantityE.value
total = total + (price * quantity);
}
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}




