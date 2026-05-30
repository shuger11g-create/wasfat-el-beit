import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.wasfatelbeit',
  appName: 'وصفات البيت',
  webDir: 'dist/client',
  android: {
    allowMixedContent: true,
  },
};

export default config;
