import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | start-here', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:start-here');
    assert.ok(route);
  });
});
