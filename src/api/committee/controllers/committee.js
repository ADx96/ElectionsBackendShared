'use strict';

/**
 * committee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::committee.committee', ({ strapi }) => ({
  async getTotalCommittees(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::committee.committee').totalCommitteeService(query);
    ctx.status = !!result?.message ? 400 : 200;
    ctx.body = !!result?.message ? result : { total: result };
  },
}));
