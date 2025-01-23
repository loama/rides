import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.rides.testapp',
  appName: 'rides',
  webDir: '.output/public',
  server: {
    url: 'http://192.168.1.13:3000',
    cleartext: true
  },
  plugins: {
    Keyboard: {
      resize: 'none',
      style: 'DARK',
      resizeOnFullScreen: false
    }
  }
}

export default config
