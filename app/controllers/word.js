import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    commitSuggestion: function() {
      console.log("Controller got it");
    }
  }
});
