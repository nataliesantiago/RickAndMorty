
// Función para obtener la lista de personajes por pagina
let getCharacters = async (page) => {
    const options = {
       method: 'GET'
   };
   try {
       const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

// Función para pintar la información obtenida del servicio por pagina
let Characters = {
    render : async (page) => {
        let post = await getCharacters(page);

        let character = '';

        post.results.forEach(oneCharacter => {
            character += `
                        <a class="character__content" href="/#/character/${oneCharacter.id}">
                            <div class="character">
                                <img src="${oneCharacter.image}" alt="${oneCharacter.name}">
                                <div class="character__info">
                                    <p class="name">${oneCharacter.name}</p>
                                </div>
                                <div class="show-more">
                                    <img src="https://image.flaticon.com/icons/svg/179/179402.svg" alt="">
                                    <p>Ver más</p>
                                </div>
                            </div>
                        </a>
                    `
        });

        return character;
    },
    after_render: async () => {}
}

export default Characters;