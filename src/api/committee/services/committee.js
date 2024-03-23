'use strict';

/**
 * committee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::committee.committee', ({ strapi }) => ({
  async totalCommitteesService(query) {
    const getData = await strapi.entityService.findMany('api::committee.committee', query);
    return getData.length;
  },
}));
