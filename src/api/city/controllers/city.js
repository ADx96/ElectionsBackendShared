'use strict';

/**
 * city controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::city.city', ({ strapi }) => ({
  async getTotalCities(ctx) {
    const query = ctx.query;

    const result = await strapi.service('api::city.city').totalCityService(query);
    ctx.body = { total: result };
  },
}));
