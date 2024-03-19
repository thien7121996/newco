import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from '@/locales/ja.json';
import { katakanaHalfwidthToFullwidth } from '@/utils/katakanaHalfwidthToFullwidth';

i18n
	.use(initReactI18next)
	.use({
		type: 'postProcessor',
		name: 'katakanaHalfwidthToFullwidth',
		process: katakanaHalfwidthToFullwidth,
	})
	.init({
		interpolation: { escapeValue: false },
		resources: {
			ja: {
				translation: ja,
			},
		},
		lng: 'ja',
	});
export default i18n;
