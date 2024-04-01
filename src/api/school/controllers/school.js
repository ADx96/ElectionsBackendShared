'use strict';

/**
 * school controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::school.school', ({ strapi }) => ({
  async getTotalSchools(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::school.school').totalSchoolsService(query);
    ctx.status = !!result?.message ? 400 : 200;
    ctx.body = !!result?.message ? result : { total: result };
  },
}));
