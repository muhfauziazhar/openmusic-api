const ExportsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'exports',
  version: '1.0.0',
  register: async (server, { exportProducerService, playlistsService, validator }) => {
    const exportHandler = new ExportsHandler(exportProducerService, playlistsService, validator);
    server.route(routes(exportHandler));
  },
};
