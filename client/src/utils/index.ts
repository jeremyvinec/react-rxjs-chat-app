import config from './config';

// mode dev || prod
const active = config.get('dev')

const DEV_API = active.DEV_API

export {
  DEV_API,
}