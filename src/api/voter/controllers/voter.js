'use strict';

/**
 * voter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::voter.voter', ({ strapi }) => ({
  async getTotalVoters(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::voter.voter').totalVotersService(query);
    ctx.body = { total: result };
  },
}));
