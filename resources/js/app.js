import { createApp } from 'vue';
import App from './components/app.vue';
import router from './router/index.js';
//bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope,faEye, faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faPhone, faBullseye, faArrowRight, faLocationDot, faCubes, faGem, faTruck, faHeadset} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope,faWhatsapp,faMagnifyingGlass, faFacebookF, faInstagram, 
    faPhone,faEye,faCheckCircle,faBullseye,faArrowRight, faLocationDot, faCubes,faGem,faTruck,faHeadset)


const app = createApp(App); 
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app'); 
app.use(VueCarousel);
