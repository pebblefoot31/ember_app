import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental-listing', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RentalListing />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RentalListing>
        template block text
      </RentalListing>
    `);

    assert.dom().hasText('template block text');
  });
});
