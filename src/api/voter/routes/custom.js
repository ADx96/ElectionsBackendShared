module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/voters/total-voters',
      handler: 'voter.getTotalVoters',
    },
  ],
};
