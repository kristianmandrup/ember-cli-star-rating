import Em from 'ember';
import startApp from '../helpers/start-app';
import { test } from 'ember-qunit';
var App;

module('StarRating', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Em.run(App, App.destroy);
  }
});


// TODO: Integration test sth like this...

test("Shows stars", function() {
  // expect(2);
  visit('/');
  // var selector = ".ember-tooltip.top.left .tip";
  // andThen(function() {
  //   ok(!find(selector).is(':visible'), "Tip invisible");
  //   Em.$(selector).parent().mouseenter(function() {
  //     find(selector).css({display: 'block', opacity:1, 'z-index': 50});
  //   });
  //   Em.$(selector).parent().trigger('mouseenter');
  // });
  // andThen(function() {
  //   ok(find(selector).is(':visible'), "Tip visible");
  // });
});

