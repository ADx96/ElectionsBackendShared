'use strict';

/**
 * voter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voter.voter', ({ strapi }) => ({
  async totalVotersService(query) {
    try {
      const getData = await strapi.entityService.count('api::voter.voter', query);
      return getData;
    } catch (e) {
      console.log(e);
      return { message: 'Error' };
    }
  },
}));
