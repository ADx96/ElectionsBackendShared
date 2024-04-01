'use strict';

/**
 * city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city.city', ({ strapi }) => ({
  async totalCityService(query) {
    try {
      const findCities = await strapi.entityService.count('api::city.city', query);
      return findCities;
    } catch (e) {
      console.log(e);
      return { message: 'Error' };
    }
  },
}));
