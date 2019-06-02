import * as _ from 'lodash';
import someService from '../services/someService';

// eslint-disable-next-line no-restricted-globals
// importScripts('../services/someService.js');

// eslint-disable-next-line no-restricted-globals
addEventListener('message', event => {
  postMessage(_.map(someService('hello world!'), (c) => c.toUpperCase()));
  // postMessage('yoyoyo');
});
