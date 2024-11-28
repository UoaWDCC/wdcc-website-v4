import * as migration_20241128_123953_inital from './20241128_123953_inital';

export const migrations = [
  {
    up: migration_20241128_123953_inital.up,
    down: migration_20241128_123953_inital.down,
    name: '20241128_123953_inital'
  },
];
