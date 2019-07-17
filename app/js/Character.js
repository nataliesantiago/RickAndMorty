import Utils from './Utils.js';

// Funcion para obtener la información de un personaje
let getPost = async (id) => {
    const options = {
       method: 'GET'
   };
   try {
       const response = await fetch(`https://rickandmortyapi.com/api/character/` + id, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

// Función para pintar la información obtenida del servicio
let Character = {
    render : async () => {
        let request = Utils.parseRequestURL()
        let character = await getPost(request.id)

        let characterEpisodes = '';

        character.episode.forEach(oneCharacter => {
            let splitEpisode = oneCharacter.split('/');
            let episodeId = splitEpisode[splitEpisode.length - 1];
            characterEpisodes += `
                                    <a href="/#/episode/${episodeId}">Episode ${episodeId}</a>
                                `
        });
        
        return /*html*/`
            <section class="container-character">
                <div class="character__image">
                    <img src="${character.image}" alt="">
                </div>
                <div class="character__info">
                    <h1>${character.name}</h1>
                    <div class="info__general">
                        <p><span>Status: </span>${character.status}</p>
                        <p><span>Species: </span>${character.species}</p>
                        <p><span>Gender: </span>${character.gender}</p>
                    </div>
                    <div class="episodes">
                        <h2>Episodes</h2>
                        <div class="episodes__list">
                            ${characterEpisodes}
                        </div>
                    </div>
                </div>
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default Character;