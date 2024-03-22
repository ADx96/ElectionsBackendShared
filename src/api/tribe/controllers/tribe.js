'use strict';

/**
 * tribe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tribe.tribe', ({ strapi }) => ({
  async getTotalTribes(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::tribe.tribe').totalTribesService(query);
    ctx.body = { total: result };
  },
}));
