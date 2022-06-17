//calling the form
const formField = document.getElementById("form-field");

// Adding event listener
formField.addEventListener("submit", (e) => {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const months = document.getElementById("months").value;
    const result = document.getElementById("resultDisplay");

    //converting rate from % to decimal
    const rateNew = rate * 0.01;

    const interest = (amount * rateNew) / months;

    const totalAmount = amount / months + interest;
   
    console.log(totalAmount);
    console.log(interest);
    
    result.value = totalAmount.toFixed(2);


    // stopping clicking the button to keep refreshing the page i.e prevent form default settings
    e.preventDefault();

});
