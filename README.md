#Ember CLI Star Rating

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/ember-cli-star-rating.svg)](https://greenkeeper.io/)

## Description
This is a star rating component for ember cli projects.

### Credits

Originally created by *Balint Erdi* as a demonstration.

Star rating component articles:

- [part 1](http://balinterdi.com/2014/02/05/convert-a-view-into-a-component.html)
- [part 2](http://balinterdi.com/2014/02/12/making-an-emberjs-component-more-reusable.html)
- [part 3](http://blinterdi.com/2014/02/18/readers-letters-making-an-ember-dot-js-component-even-better.html)

## Installation

`npm install ember-cli-star-rating --save-dev`

## Basic Usage

```html
<div class="box">
  {{#each}}
    <div class="rating">
      {{star-rating item=this ratingProperty="score" maxRating=5 setAction="setRating"}}
    </div>
  {{/each}}
</div>
```

## Demo
See [part 2](http://balinterdi.com/2014/02/12/making-an-emberjs-component-more-reusable.html)

### Test
See dummy app in `tests/dummy` folder

## Requirements
- Needs scss support, since the stylesheet needs to be imported to work

## Options
Todo
