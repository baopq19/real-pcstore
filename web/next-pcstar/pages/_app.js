import { APPEARANCE, DARK_MODE, LIGHT_MODE } from '../util/Constant';
import './../styles/global.css';
import 'material-icons/iconfont/filled.css';

function MyApp({ Component, pageProps }) {
	if (typeof window !== 'undefined') {
		const userAppearance = localStorage.getItem(APPEARANCE);
		const htmlEle = document.documentElement;
		if (userAppearance === DARK_MODE) {
			htmlEle.classList.add(DARK_MODE);
		} else if (userAppearance !== LIGHT_MODE) {
			localStorage.setItem(APPEARANCE, LIGHT_MODE);
		}
	}
	return <Component {...pageProps} />;
}

export default MyApp;
