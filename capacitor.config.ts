import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.cap.project',
	appName: 'Cap Test Project',
	webDir: 'dist/cap-test-project',
	bundledWebRuntime: false,
	plugins: {
		SplashScreen: {
			launchShowDuration: 2000,
			launchAutoHide: true
		}
	}
};

export default config;
