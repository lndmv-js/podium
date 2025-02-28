import { createStore } from 'vuex';

import notifications from './modules/notifications';
import textpages from './modules/textpages';
import shoplist from './modules/shoplist';
import bonuscards from './modules/bonuscards';
import cliendata from './modules/cliendata';
import purchases from './modules/purchases';

const store = createStore({
	modules: {
		notifications,
		textpages,
		shoplist,
		bonuscards,
		cliendata,
		purchases
	}
});

export default store;