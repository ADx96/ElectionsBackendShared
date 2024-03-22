'use strict';

/**
 * tribe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tribe.tribe', ({ strapi }) => ({
  async totalTribesService(params) {
    const getData = await strapi.entityService.findMany('api::tribe.tribe', params);
    return getData.length;
  },
}));
