'use strict';

/**
 * city controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::city.city', ({ strapi }) => ({
  async getTotalCities(ctx) {
    const query = ctx.query;
    const result = await strapi.service('api::city.city').totalCityService(query);
    ctx.status = !!result?.message ? 400 : 200;
    ctx.body = !!result?.message ? result : { total: result };
  },
}));
