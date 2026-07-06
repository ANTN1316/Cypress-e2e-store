module.exports = {
  projectId: 'epme66',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://front.serverest.dev'
    },
  },
};
