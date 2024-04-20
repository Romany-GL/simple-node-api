const routes = (app: any) => {
  app.use('/api/users', require('../api/users'));
};

module.exports = routes;
