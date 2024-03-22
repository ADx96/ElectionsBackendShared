'use strict';

/**
 * city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city.city', ({ strapi }) => ({
  async totalCityService(query) {
    const findCities = await strapi.entityService.findMany('api::city.city', query);
    return findCities.length;
  },
}));
