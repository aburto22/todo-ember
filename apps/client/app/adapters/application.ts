import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'client/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.APP['API_URL'] || '';
  namespace = 'api';
}
