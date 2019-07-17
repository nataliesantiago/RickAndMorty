import Utils from './Utils.js';

// Función para obtener la información de un episodio
let getEpisode = async (id) => {
    const options = {
       method: 'GET'
   };
   try {
       const response = await fetch(`https://rickandmortyapi.com/api/episode/` + id, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

// Función para pintar la información obtenida del servicio
let Episode = {
    render : async () => {
        let request = Utils.parseRequestURL()
        let episode = await getEpisode(request.id)
        
        return /*html*/`
        <div class="container-episode">
            <div class="episode__image">
                <img src="https://images.immediate.co.uk/production/volatile/sites/3/2017/08/Rickandmorty.jpg?quality=90&resize=620,413" alt="">
            </div>
            <div class="episode__info">
                <p><span>Name: </span> ${episode.name}</p>
                <p><span>Air date: </span> ${episode.air_date}</p>
                <p><span>Episode number: </span> ${episode.episode}</p>
            </div>
        </div>
        `
    }
    , after_render: async () => {
    }
}

export default Episode;