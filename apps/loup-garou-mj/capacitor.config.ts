import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.blitzapp.lgmj',
  appName: 'loup-garou-mj',
  webDir: '../../dist/apps/loup-garou-mj/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
