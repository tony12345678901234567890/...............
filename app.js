var cartTotals = [];
function addSushi() {
  sessionStorage.setItem("sushi1", "Sushi Platter");
  localStorage.setItem("receipt", JSON.stringify(cartTotals));
  cartTotals.push(200);
  addTotal();
}
function addFish() {
  sessionStorage.setItem("fish1", "Fish Sandwich");
  localStorage.setItem("receipt", JSON.stringify(cartTotals));
  cartTotals.push(100);
  addTotal();
}
function addSundae() {
  sessionStorage.setItem("sundae1", "Sundae");
  localStorage.setItem("receipt", JSON.stringify(cartTotals));
  cartTotals.push(2000);
  addTotal();
}
function showAll() {
  cartContents = [];
  for (var i = 0; i < sessionStorage.length; i++) {
    cartContents.push(sessionStorage.getItem(sessionStorage.key(i)));
    
      document.getElementById('storageArea').innerHTML = cartContents;
  }
}

function addTotal() {
  var total = 0;
  for (var i = 0; i < cartTotals.length; i++) {
    total += cartTotals[i];
  }
  document.getElementById('subTotal').innerHTML = "Sub Total:  " + total.toFixed(2) + "<br>";
  document.getElementById('grandTotal').innerHTML = "4.712% tax:  " + ((total * 1.04712).toFixed(2));
}
function finalizeReceipt() {
    if (cartTotals.length === 0) {
    document.getElementById('grandTotal').innerHTML = "Nothing Ordered";
}
    else {
    localStorage.setItem("receipt",JSON.stringify(cartTotals));
    location.href = "index2.html";
}
}