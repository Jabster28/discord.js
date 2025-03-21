'use strict';

const process = require('node:process');
const StringSelectMenuBuilder = require('./StringSelectMenuBuilder');

let deprecationEmitted = false;

/**
 * @deprecated Use {@link StringSelectMenuBuilder} instead.
 */
class SelectMenuBuilder extends StringSelectMenuBuilder {
  constructor(...params) {
    super(...params);

    if (!deprecationEmitted) {
      process.emitWarning(
        'The SelectMenuBuilder class is deprecated, use StringSelectMenuBuilder instead.',
        'DeprecationWarning',
      );
      deprecationEmitted = true;
    }
  }
}

module.exports = SelectMenuBuilder;
