
const jogos = [
    {
        titulo: "Red Dead Redemption 2",
        imagem: "https://m.media-amazon.com/images/I/81dKP+iFloL.jpg",
        descricao: "Um épico jogo de faroeste em mundo aberto."
    },
    {
        titulo: "FC26",
        imagem: "https://cdn.awsli.com.br/600x450/51/51695/produto/369363009/fc-26-0-cover-a1483x691j.jpg",
        descricao: "EA SPORTS FC 26, eleva a simulação de futebol com jogabilidade reformulada, posicionamento inteligente de IA, gráficos aprimorados e o grande destaque da Copa do Mundo de 48 seleções."
    },
    {
        titulo: "Minecraft",
        imagem: "https://store-images.s-microsoft.com/image/apps.17382.13510798885735219.9735d495-578c-4a4c-b892-3eb3a780b3a0.d3792486-cf98-40c0-a2c1-d6443f0e2b70",
        descricao: "Construa e sobreviva em um mundo infinito."
    },
    {
        titulo: "CS 2",
        imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/CS2_Cover_Art.jpg/250px-CS2_Cover_Art.jpg",
        descricao: "um jogo tático multijogador de tiro em primeira pessoa."
    },
    {
        titulo: "Elder Ring",
        imagem: "https://www.adrenaline.com.br/wp-content/uploads/2026/06/elden-ring-tarnished-edition-720x900.jpg",
        descricao: "Elden Ring é um jogo eletrônico Souls Like de mundo aberto em terceira pessoa"
    },
    {
        titulo: "Pokemon",
        imagem: "https://m.media-amazon.com/images/I/71w18E60zzL._AC_UF1000,1000_QL80_.jpg",
        descricao: "Pokémon: Let's Go, Pikachu! é um jogo de RPG lançado para o Nintendo Switch, que recria a clássica jornada de Kanto"
    }
];

const listaJogos = document.getElementById("ListaJogos");
const campoBusca = document.getElementById("campoBusca");

function mostrarJogos(lista){
    listaJogos.innerHTML = "";

    lista.forEach(jogo => {
        listaJogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${jogo.imagem}" class="card-img-top" alt="${jogo.titulo}">

                    <div class="card-body">
                        <h3>${jogo.titulo}</h3>
                        <p>${jogo.descricao}</p>

                        <button class="btn-custom" onclick="verDetalhes('${jogo.titulo}', '${jogo.descricao}')">
                            Ver detalhes
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "success",
        confirmButtonColor: "#2563eb"
    });
}

campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase();

    const jogosFiltrados = jogos.filter(jogo =>
        jogo.titulo.toLowerCase().includes(texto)
    );

    mostrarJogos(jogosFiltrados);
});

mostrarJogos(jogos);
