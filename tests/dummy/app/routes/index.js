import Ember from 'ember';

App.Player = Ember.Object.extend({
  name: '',
  score: 0
});

export default = Ember.Route.extend({
  model: function() {
    return [
      App.Player.create({ name: "Lionel Messi", score: 5 }),
      App.Player.create({ name: "Ndabezinle Tsitsi", score: 2 }),
      App.Player.create({ name: "Garreth Bale", score: 4 })
    ];
  }
});