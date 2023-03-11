// to get live input from the user 
const cardholderEl = document.getElementById("cardholder");
const cardNumberEL = document.getElementById("cardNumber");
const expireMonthEl = document.getElementById("expire-month");
const expireYearEl = document.getElementById("expire-year");
const cvcEl = document.getElementById("cvc");

const cvcTag = document.getElementById("cvc-tag");
const cardNumberTag = document.getElementById("cardNumber-tag");
const nameTag = document.getElementById("name-tag");
const monthTag = document.getElementById("month-tag");
const yearTag = document.getElementById("year-tag");

[cardholderEl, cardNumberEL, expireMonthEl, expireYearEl, cvcEl].forEach(input =>{
    input.addEventListener("input", function(){
        // to make only the active input change on the card
        if( input === cardholderEl){
        nameTag.textContent = cardholderEl.value.toUpperCase();
        } else if( input === cardNumberEL){
        cardNumberTag.textContent = cardNumberEL.value;
        } else if ( input === expireMonthEl){
        monthTag.textContent = expireMonthEl.value;
        } else if ( input === expireYearEl){
        yearTag.textContent = expireYearEl.value;
        } else if ( input === cvcEl){
        cvcTag.textContent = cvcEl.value;
        }

    })
})


// to check if the user have fill all the form with correct input
const form = document.getElementById("form-group");

form.addEventListener("submit",  function(event){
    event.preventDefault();

    const cardholderEl = document.getElementById("cardholder");
    const cardNumberEL = document.getElementById("cardNumber");
    const expireMonthEl = document.getElementById("expire-month");
    const expireYearEl = document.getElementById("expire-year");
    const cvcEl = document.getElementById("cvc");
    const completePageEl = document.querySelector(".complete-page")
    const formEl = document.getElementById("form-group");


    const nameErrorEl = document.getElementById("name-error");
    const numberErrorEl = document.getElementById("number-error");
    const expireErrorEL = document.getElementById("expire-error");
    const cvcErrorEl = document.getElementById("cvc-error")

    if (!cardholderEl.value.trim()){
        nameErrorEl.innerHTML = "Name can not be blank";
    } else{
        nameErrorEl.innerHTML = "";
    }

    if (!cardNumberEL.value.trim()){
        numberErrorEl.innerHTML = "Please provide the card number";
    } else if (!cardNumberEL.value.trim().match(/^(\d{4}\s){3}\d{4}$/)){
        numberErrorEl.innerHTML = "Please provide 16 digit number";
    } else {
        numberErrorEl.innerHTML = "";
    }

    if(!expireMonthEl.value.trim() || !expireYearEl.value.trim()){
        expireErrorEL.innerHTML = "This can't be empty";
    } else if(isNaN(expireMonthEl.value.trim() || expireYearEl.value.trim())){
        expireErrorEL.innerHTML = "input only number";
    } else {
        expireErrorEL.innerHTML = "";
    }

    if(!cvcEl.value.trim()){
        cvcErrorEl.innerHTML = "Please provide 3 digit number";
    } else if(isNaN(cvcEl.value.trim())){
        cvcErrorEl.innerHTML = "Please provide only number";
    } else{
        cvcErrorEl.innerHTML = "";
    }

    if(cardholderEl.value.trim() && cardNumberEL.value.trim() && cardNumberEL.value.trim().match(/^(\d{4}\s){3}\d{4}$/) && expireMonthEl.value.trim() && expireYearEl.value.trim() && cvcEl.value.trim()){
        formEl.style.display = "none";
        completePageEl.style.display = "block";
        formEl.reset();
    }
})

// Returning to the main page
function previousPage(){
    const formEl = document.getElementById("form-group");
    const completePageEl = document.querySelector(".complete-page")
    completePageEl.style.display = "none";
    formEl.style.display = "block";
} 