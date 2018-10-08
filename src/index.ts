/* eslint-disable no-console */
import logger from './logger';
import app from './app';

const port : Number = app.get('port');
const server : any = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);

// REMOVE ME: this part just shows/checks that we can use Promise.finally, introduced in ES2018.
Promise.resolve('blah')
    .then( () => {})
    .finally ( () => {});
// END REMOVE ME
