'use strict';

/**
 * committee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::committee.committee', ({ strapi }) => ({
  async totalCommitteeService(params) {
    try {
      const getData = await strapi.entityService.count('api::tribe.tribe', params);
      return getData;
    } catch (e) {
      console.log(e);
      return { message: 'Error' };
    }
  },
}));
