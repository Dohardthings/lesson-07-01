import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),
  name: this.name,
  score: this.score,

  votePlus(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) + 1);
      this.get('heroes').update(hero);
    },

  voteMinus(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) - 1);
      this.get('heroes').update(hero);
      },
});
