import Ember from 'ember';

export default = Ember.ArrayController.extend({
  actions: {
    setRating: function(player) {
      console.log(player.get('name') + " now has " + player.get('score') + " stars.");
    }
  }
});