import topo from '../../assets/topo.png'
import logoVendedor from '../../assets/logo.png'

import antena2g from '../../assets/Itens/antena2g3g.png'
import antenawifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import node from '../../assets/Itens/nodeMcu.png'
import roteador from '../../assets/Itens/roteador.jpg'
import caborj from '../../assets/Itens/cabo_rj45.png'

const carrinho = {
    topo: {
        titulo: "Carrinho",
        imagem: topo
    },
    detalhes: {
        titulo: "Detalhes do Carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor: logoVendedor,
        nomeVendedor: "Nuven's Shopping",
        preco: "R$ 99,00"
    },
    itens: {
        titulo: "Itens do Carrinho",
        lista: [
            {
                nome: "Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome: "Antena WiFi",
                imagem: antenawifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCU",
                imagem: node,
            }
        ],
        tituloRecomendados: "Itens recomendados",
        lista2: [{
            nome: "Cabo de Rede Conector RJ-45",
            imagem: caborj,
        },
        {
            nome: "Roteador WireLess Gigabit",
            imagem: roteador
        }
        ]
    }

};

export default carrinho;