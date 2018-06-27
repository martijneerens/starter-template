import { setupTouchClasses } from 'vklib';
import { track} from 'vklib';

let IS_DEBUG = false;

if(window && window.location && window.location.href){
    IS_DEBUG = window.location.href.indexOf('debug') !== -1;
}

setupTouchClasses();

track.init({
    debug : IS_DEBUG
});