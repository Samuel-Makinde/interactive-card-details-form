# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This project is about interactive card form that get texts from the input box and display the user input details on the card. 

### The challenge
The major challenge is about manipulating DOM to get input in real time and also display it.

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot


### Links

- Solution URL: []
- Live Site URL: [https://serene-pika-c7c5b1.netlify.app/]


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
This project make me to understand how to get input from user and display it in real time and how to display error message when the input content is wrong


To see how you can add code snippets, see below:

```html
<figure>
    <img src="./images/bg-card-back.png" alt="">
    <figcaption id="cvc-tag">000</figcaption>
</figure>
```
```css
.proud-of-this-css {
  .second-card figure p:nth-child(2), span:first-child {
    padding-left: 12rem;
}
}
```
```js
const proudOfThisFunc = () => {
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
}
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Samuel-Makinde)


