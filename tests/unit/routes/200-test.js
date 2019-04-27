import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | 200', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:200');
    assert.ok(route);
  });
});
