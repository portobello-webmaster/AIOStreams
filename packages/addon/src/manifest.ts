import { Config } from '@aiostreams/types';
import { version, description } from '../package.json';
import { getTextHash, Settings } from '@aiostreams/utils';

const manifest = (config?: Config, configPresent?: boolean) => {
  let addonId = Settings.ADDON_ID;
  if (config && Settings.DETERMINISTIC_ADDON_ID) {
    addonId =
      addonId += `.${getTextHash(JSON.stringify(config)).substring(0, 12)}`;
  }
  return {
    name: config?.overrideName || Settings.ADDON_NAME,
    id: addonId,
    version: version,
    description: description,
    catalogs: [],
    resources: ['stream'],
    background:
      'https://raw.githubusercontent.com/Viren070/AIOStreams/refs/heads/main/packages/frontend/public/assets/background.png',
    logo: 'https://aiostreams.portobello.workers.dev/assets/plogo.png',
    types: ['movie', 'series'],
    behaviorHints: {
      configurable: true,
      configurationRequired: config || configPresent ? false : true,
    },
  };
};

export default manifest;
