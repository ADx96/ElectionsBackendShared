'use strict';

/**
 * voter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voter.voter', ({ strapi }) => ({
  async totalVotersService(query) {
    const getData = await strapi.entityService.findMany('api::voter.voter', query);
    return getData.length;
  },
}));
