'use strict';

/**
 * pay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pay.pay');
