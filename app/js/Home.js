// Función para pintar la información del home
let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="container-home">
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?itok=0mvkxyVX" alt="Background-rick-morty">
            </section>
        `
        return view
    },
    after_render: async () => {}
}

export default Home;