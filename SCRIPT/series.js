
const series = [
    {
        titulo: "Dark",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Dark_%28s%C3%A9rie%29.jpg/250px-Dark_%28s%C3%A9rie%29.jpg",
        descricao:"Três gerações de quatro famílias buscam respostas para o desaparecimento de uma criança em uma trama complexa de viagem no tempo.",
    },
    {
        titulo:"Succession",
        imagem: "https://m.media-amazon.com/images/I/71vZ1nRKVYL._AC_UF894,1000_QL80_.jpg",
        descricao:"Os filhos de um bilionário dono de um império de mídia lutam entre si e contra o próprio pai para ver quem herdará a empresa."
    },
    {
        titulo:" The Bear",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYB1Mb5gPrDhCrc-OEfSrQ30QquS7kOCqWw0D_dKDwPQqX3kCCQmlIXKh-8hzVH_f1ZJHTfNVPgAnJON25KKRdVMEDRbxgPPxTSnHyluM&s=10",
        descricao: " Um jovem chef de alta gastronomia volta para casa para administrar a lanchonete falida da família após uma tragédia.",
    },
    {
        titulo:"Mindhunter",
        imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/07/17/01/2286697.jpg",
        descricao: " Dois agentes do FBI na década de 1970 criam as primeiras técnicas de perfil psicológico entrevistando assassinos em série famosos.",
    },
    {
        titulo:"Ruptura",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_702732-MLB84931164885_052025-O.webp",
        descricao: "Funcionários de um escritório bizarro passam por um procedimento cirúrgico que separa cirurgicamente suas memórias profissionais das pessoais.",
    },
    {
        titulo:"Chernobyl",
        imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/9/92/PosterChernobyl.jpg/250px-PosterChernobyl.jpg",
        descricao:"A história real dos cientistas e trabalhadores que se sacrificaram para conter o desastre nuclear de 1986 na Ucrânia Soviética."
    }
];

const listaSeries = document.getElementById("ListaSeries");
const campoBusca = document.getElementById("campoBusca");

function mostrarSeries(lista){
    listaSeries.innerHTML = "";

    lista.forEach(serie => {
        listaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${serie.imagem}" class="card-img-top" alt="${serie.titulo}">

                    <div class="card-body">
                        <h3>${serie.titulo}</h3>
                        <p>${serie.descricao}</p>

                        <button class="btn-custom" onclick="verDetalhes('${serie.titulo}', '${serie.descricao}')">
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

    const seriesFiltradas = series.filter(serie =>
        serie.titulo.toLowerCase().includes(texto)
    );

    mostrarSeries(seriesFiltradas);
});

mostrarSeries(series);
