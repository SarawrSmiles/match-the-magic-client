import EmberObject from '@ember/object';
import ScrollerMixinMixin from 'db/mixins/scroller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | ScrollerMixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScrollerMixinObject = EmberObject.extend(ScrollerMixinMixin);
    let subject = ScrollerMixinObject.create();
    assert.ok(subject);
  });
});
