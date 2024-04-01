'use strict';

/**
 * tribe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tribe.tribe', ({ strapi }) => ({
  async totalTribesService(params) {
    try {
      const getData = await strapi.entityService.count('api::tribe.tribe', params);
      return getData;
    } catch (e) {
      console.log(e);
      return { message: 'Error' };
    }
  },
}));
