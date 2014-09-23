import Ember from 'ember';

// http://balinterdi.com/2014/02/05/convert-a-view-into-a-component.html
// http://balinterdi.com/2014/02/12/making-an-emberjs-component-more-reusable.html
Ember.StarRatingComponent = Ember.Component.extend({
  classNames: ['rating-panel'],
  numStars:  Ember.computed.alias('maxRating'),
  fullStars: null,

  didInsertElement: function() {
    var property = this.get('ratingProperty');
    this.set('fullStars', this.get('item').get(property));
    Ember.addObserver(this.get('item'), property, this, this.ratingPropertyDidChange);
  },

  willDestroyElement: function() {
    var property = this.get('ratingProperty');
    Ember.removeObserver(this.get('item'), property, this.ratingPropertyDidChange);
  },

  ratingPropertyDidChange: function(item, ratingProperty) {
    this.set('fullStars', item.get(ratingProperty));
  },

  stars: function() {
    var ratings = [];
    var fullStars = this.starRange(1, this.get('fullStars'), 'full');
    var emptyStars = this.starRange(this.get('fullStars') + 1, this.get('numStars'), 'empty');
    Array.prototype.push.apply(ratings, fullStars);
    Array.prototype.push.apply(ratings, emptyStars);
    return ratings;
  }.property('fullStars', 'numStars'),

  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },

  actions: {
    // http://balinterdi.com/2014/02/18/readers-letters-making-an-ember-dot-js-component-even-better.html
    setRating: function(newRating) {
      this.sendAction('setAction', {
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});