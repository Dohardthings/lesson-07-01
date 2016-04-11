import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),
  addHero() {
    const attributes = {
      name: this.name,
      score: 0,
    };
    this.get(`heroes`).createRecord(attributes).then(this.transitionToRoute(`index`));
  },
});
