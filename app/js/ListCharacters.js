import Characters from './Characters.js';

// Función para pintar los resultados por pagina y el paginador correspondiente
let ListCharacter = {
    render : async () => {
        
        return `<div class="all-characters" >

            <h2>Characters List</h2>

            <section class="characters-grid" id="list_characters">
                
            </section>

            <section class="pagination-characters">
                <ul class="paginator">
                    <li class="paginator__item" id="prev">
                        <img src="https://image.flaticon.com/icons/svg/179/179393.svg">
                    </li>
                    <li class="paginator__item" id="next">
                        <img src="https://image.flaticon.com/icons/svg/179/179411.svg">
                    </li>
                </ul>
            </section>
        </div>`;
    },
    after_render: async () => {

        repaint(1);

        let page = 1;

        // Función click para disminuir el paginador
        document.getElementById("prev").addEventListener ("click",  () => {
            if(page > 1){
                page--;
            }
            repaint(page);
        });

        // Función click para aumentar el paginador
        document.getElementById("next").addEventListener ("click",  () => {
            page++;
            Characters.render(page);
            repaint(page);
        });
    }
}

// Función para repintar la información de acuerdo a cada pagina
let repaint = async (page) => {
    const contentCharacters = null || document.getElementById('list_characters');
    contentCharacters.innerHTML = await Characters.render(page);
    await Characters.after_render();
}

export default ListCharacter;