import { Component } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';
import { Geolocation } from '@capacitor/geolocation';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public currentLocation: string = '';
	constructor() {

		SplashScreen.show().then((res) => console.log('show splash screen', res));

		Keyboard.addListener('keyboardDidShow', () => {
			Keyboard.setAccessoryBarVisible({ isVisible: false });
		});

		Keyboard.addListener('keyboardDidHide', () => {
			console.log('keyboard close');
		});

	}

	async getCurrentLocation() {
		const c = await Geolocation.getCurrentPosition().then((res) => { });
	}
	
}
