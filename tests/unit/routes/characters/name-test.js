import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | characters/name', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:characters/name');
    assert.ok(route);
  });
});
