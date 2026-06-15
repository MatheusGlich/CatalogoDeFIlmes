
const filmes = [
    {
        titulo: "Vingadores Ultimato",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
        descricao:"Thanos tenta reunir as seis Joias do Infinito para apagar metade da vida no universo. Os Vingadores e os Guardiões da Galáxia se unem para tentar impedi-lo.",
    },
    {
        titulo:"Batman O Cavaleiro Das Trevas",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg",
        descricao:"Batman, Jim Gordon e Harvey Dent combatem o crime organizado em Gotham. O plano deles é ameaçado quando o psicótico Coringa surge, espalhando o caos e testando os limites morais do herói."
    },
    {
        titulo:"Backrooms Um Não-Lugar",
        imagem: "https://preview.redd.it/is-this-the-offical-poster-for-the-backrooms-movie-v0-lul1fkm69qdf1.jpeg?auto=webp&s=f5e33c9ea32706e20589849b1faf77d929c74749",
        descricao: "O vendedor Clark desaparece em um labirinto infinito de salas vazias após achar um portal no porão. Sua terapeuta, Dra. Mary, entra nessa dimensão bizarra para resgatá-lo e confronta seus próprios traumas.",
    },
    {
        titulo:"Super Mario Galaxy",
        imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/The_Super_Mario_Galaxy_Movie_poster.jpeg/250px-The_Super_Mario_Galaxy_Movie_poster.jpeg",
        descricao: "Bowser sequestra a Princesa Peach e a leva para o espaço. Mario se une à misteriosa Rosalina e viaja por várias galáxias para salvar o universo e resgatar a princesa.",
    },
    {
        titulo:"Star Wars Mandalorian",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfcFcNLClcwsPKn92fLnrpnnGqurbygVpAuugIVUfJNY7HzmMK9JW1xGeqW8bSUYezd9GOq8CIdYINNzo60AS4o1vfh-rL3dYfS2XtZg&s=10",
        descricao: "O caçador de recompensas solitário Din Djarin é contratado para capturar um alvo misterioso nos confins da galáxia. Ao descobrir que o alvo é Grogu, uma criança com poderes da Força, ele decide protegê-lo e foge de remanescentes do Império.",
    },
    {
        titulo:"Mestre Do Universo",
        imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/Masters_of_the_Universe_2026_poster.jpeg/250px-Masters_of_the_Universe_2026_poster.jpeg",
        descricao:"O guerreiro He-Man e seus aliados defendem o planeta Eternia contra as forças malignas do feiticeiro Esqueleto. O vilão tenta invadir o Castelo de Grayskull para roubar os segredos místicos que lhe darão o controle de todo o universo."
    }
];

const listaFilmes = document.getElementById("ListaFilmes");
const campoBusca = document.getElementById("campoBusca");

function mostrarFilmes(lista){
    listaFilmes.innerHTML = "";

    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
                    
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>

                        <button class="btn-custom" onclick="verDetalhes('${filme.titulo}', '${filme.descricao}')">
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
        icon: "info",
        confirmButtonColor: "#2563eb"
    });
}

campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase();

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo.toLowerCase().includes(texto)
    );

    mostrarFilmes(filmesFiltrados);
});

mostrarFilmes(filmes);
