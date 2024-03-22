'use strict';

/**
 * school controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::school.school', ({ strapi }) => ({
  async getTotalSchools(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::school.school').totalSchoolsService(query);
    ctx.body = { total: result };
  },
}));
