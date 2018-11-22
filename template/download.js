var dsdownload = require('directus-download');

const NUXT_CONF = require('./nuxt.config');
const CONF = NUXT_CONF.env;

console.log(CONF);

dsdownload({
    items: CONF.items,
    csvPath : false,
    dataPath : './static/data/data.json',
    mediaPath : './static/media/',
    baseUrl: 'https://labs.volkskrant.nl',
    apiUrl: 'https://labs.volkskrant.nl/directus/',
    mediaBookPath: 'media/', // And this is used for replacing
    useImageObjects: true, //return full directus file object instead of the url as a string only
    skipExistingFiles : true,
    prettifyJson: true,
    callback : function(){
        console.log('directus download complete!')
    }
});
