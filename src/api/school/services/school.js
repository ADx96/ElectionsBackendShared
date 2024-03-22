'use strict';

/**
 * school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school.school', ({ strapi }) => ({
  async totalSchoolsService(query) {
    const getData = await strapi.entityService.findMany('api::school.school', query);
    return getData.length;
  },
}));
