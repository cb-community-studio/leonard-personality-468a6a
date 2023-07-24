const { Responses } = require('./responses.class');
const createModel = require('../../models/responses.model');
const hooks = require('./responses.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/responses', new Responses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('responses');

  service.hooks(hooks);
};