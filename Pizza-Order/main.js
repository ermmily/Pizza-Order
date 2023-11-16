// Pizza Order by MR. V

//add an Event Listener ot the button to run the PlaceOrder fuction
document.getElementById("btn").addEventListener("click", PlaceOrder);

//store order code in a fucntion
function PlaceOrder() {
  // INPUT
  let size = prompt("Enter size of pizza (small, medium, large)");
  let topping1 = prompt("Enter first topping:  ");
  let topping2 = prompt("Enter second topping:  ");

  // PROCESS
  let msg = `your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  // OUTPUT
  alert(msg);
}
