import './../sass/styles.scss';

import Home from './Home.js';
import ListCharacters from './ListCharacters';
import Character from './Character.js';
import Episode from './Episode';
import Utils from './Utils.js';

// Aca se definen las diferentes rutas a utilizar
const routes = {
    '/'             : Home, 
    '/characters' : ListCharacters,
    '/character/:id' : Character,
    '/episode/:id' : Episode
};

// Función para pintar la información de acuerdo a cada ruta
const router = async () => {

    const contentCharacters = null || document.getElementById('page_container');

    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    
    contentCharacters.innerHTML = await page.render();
    await page.after_render();

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);
