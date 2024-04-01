'use strict';

/**
 * school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school.school', ({ strapi }) => ({
  async totalSchoolsService(query) {
    try {
      const getData = await strapi.entityService.count('api::school.school', query);
      return getData;
    } catch (e) {
      console.log(e);
      return { message: 'Error' };
    }
  },
}));
