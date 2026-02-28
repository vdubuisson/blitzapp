// Learn more about Vitest configuration options at https://vitest.dev/config/

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // inline @ngneat/spectator
    server: {
      deps: {
        inline: ['@ngneat/spectator'],
      },
    },
  },
});
