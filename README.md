Unit converter

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Enter a value and see measurement conversions for length, volume and mass.

## My process

I wrote the basic HTML framework pretty quickly, but what took a little longer was giving multiple elements `id`s so that values could be changed upon an input event.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- HTML DOM Event Listeners

### What I learned

The aim of this project was to take the value of a DOM element and use JavaScript to perform operations to convert units of measurement. I chose to take it a step further by creating an input element, so that the user can get the unit conversion for any value they wish.
I had to do a little bit of reading about the type of event to listen for. I decided on `"input"` as the event listener, and as the user is entering a value, all of the values in the `conversions` section change along with it. I may revise this at some point however.
I also learned about the Math.round method, which I needed in order to limit the return values to no more than 3 decimal places. I may want to look at some more articles on this, as some of the values come back with only 2 decimal places. I want the return values to consistently display 3.


### Continued development

As mentioned above, I want to learn more about different HTML DOM event listeners and the Math.round operation. 

### Useful resources

This is the article I read about Math.round: https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8

## Author

- Twitter - [@NotMichaella](https://twitter.com/NotMichaella)