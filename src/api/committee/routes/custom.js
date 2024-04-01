module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/committees/total-committees',
      handler: 'committee.getTotalCommittees',
    },
  ],
};
