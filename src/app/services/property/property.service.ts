import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties = [
    {
      id: 96216,
      imageUrl: 'assets/images/cumbuco.png',
      type: 'Casa',
      isNew: false,
      title: 'Rua Dep. Moreira da Rocha, 1788, Meireles, Fortaleza-CE',
      area: 253,
      bedrooms: 4,
      suites: 1,
      parking: 3,
      price: 3800000,
      functionality: 'Compra',
      description: 'Localizado no prestigiado bairro de Meireles, em Fortaleza, este imóvel de alto padrão' +
                    ' redefine o conceito de luxo e sofisticação. Com uma arquitetura contemporânea e design' +
                    ' exclusivo, a propriedade oferece uma experiência única de moradia, combinando conforto,' +
                    ' elegância e tecnologia de ponta.'
    },
    {
        id: 96217,
        imageUrl: 'assets/images/maracanau.png',
        type: 'Casa',
        isNew: false,
        title: 'Jardim da Serra, Maracanaú-CE',
        area: 200,
        bedrooms: 6,
        suites: 1,
        parking: 3,
        price: 4200000,
        functionality: 'Compra',
        description: 'Localizado em um bairro privilegiado da cidade industrial de Maracanaú, este imóvel' +
                    ' oferta, além de um excelente preceito de luxo, acesso prestigiado às principais vias' +
                    ' que dão acesso à capital e aos melhores serviços de Maracanaú.'
    },
    {
        id: 96218,
        imageUrl: 'assets/images/eusebio.jpg',
        type: 'Casa',
        isNew: false,
        title: 'Coité, Eusébio-CE',
        area: 200,
        bedrooms: 5,
        suites: 1,
        parking: 8,
        price: 8900,
        functionality: 'Locação',
        description: 'Em meio ao cinturão metropolitano de Fortaleza, este imóvel localizado em Eusébio' +
                    ' fornece acesso privilegiado aos melhores serviços do município, segurança, tranquilidade' +
                    ' e acesso facilitado à capital e aos demais municípios metropolitanos. Uma combinação de luxo,' +
                    ' sofisticação e modernidade.'
    },
    {
        id: 96219,
        imageUrl: 'assets/images/guaramiranga.png',
        type: 'Casa',
        isNew: false,
        title: 'Serra dos Maciços, Guaramiranga-CE',
        area: 300,
        bedrooms: 6,
        suites: 3,
        parking: 16,
        price: 12200,
        functionality: 'Locação',
        description: 'Em meio à serenidade e à beleza natural da serrana Guaramiranga, no maciço de Baturité, encravada em um majestoso maciço residual,' +
            ' este imóvel de alto padrão oferece uma experiência única de moradia, onde o luxo que lembra a arquitetura imperial se harmoniza com a paisagem' +
            ' deslumbrante. Projetado para integrar-se perfeitamente ao ambiente, o imóvel é um refúgio de tranquilidade' +
            ' e sofisticação, ideal para quem busca conexão com a natureza sem abrir mão do conforto e da exclusividade.'
    },
    {
        id: 96220,
        imageUrl: "assets/images/juazeiro.png",
        type: "Casa",
        isNew: false,
        title: "Lagoa Seca, Juazeiro do Norte-CE",
        area: 200,
        bedrooms: 6,
        suites: 1,
        parking: 3,
        price: 405000,
        functionality: "Compra",
        description: "Casa espaçosa localizada em Lagoa Seca, Juazeiro do Norte-CE, com 6 quartos, 1 suíte e 3 vagas de garagem. Ideal para famílias que buscam conforto e espaço em uma região tranquila."
    },
    {
        id: 96221,
        imageUrl: "assets/images/cascavel.png",
        type: "Casa",
        isNew: false,
        title: "São Cristóvão, Cascavel-CE",
        area: 200,
        bedrooms: 6,
        suites: 1,
        parking: 3,
        price: 2900000,
        functionality: "Compra",
        description: "Casa de alto padrão em São Cristóvão, Cascavel-CE, com 6 quartos, 1 suíte e 3 vagas de garagem. Perfeita para quem busca luxo e sofisticação em uma localização privilegiada."
    },
    {
        id: 96222,
        imageUrl: "assets/images/caninde.png",
        type: "Casa",
        isNew: false,
        title: "Bela Vista, Canindé-CE",
        area: 200,
        bedrooms: 6,
        suites: 1,
        parking: 9,
        price: 8400,
        functionality: "Locação",
        description: "Casa ampla em Bela Vista, Canindé-CE, com 6 quartos, 1 suíte e 9 vagas de garagem. Excelente opção para locação, oferecendo espaço e comodidade."
    },
    {
        id: 96223,
        imageUrl: "assets/images/jericoacoara.png",
        type: "Casa de praia",
        isNew: false,
        title: "Lagoa Azul, Jijoca de Jericoacoara-CE",
        area: 180,
        bedrooms: 4,
        suites: 2,
        parking: 6,
        price: 5500,
        functionality: "Locação",
        description: "Encantadora casa de praia em Lagoa Azul, Jijoca de Jericoacoara-CE, com 4 quartos, 2 suítes e 6 vagas de garagem. Ideal para quem deseja desfrutar de momentos inesquecíveis à beira-mar."
    },
    {
        id: 96224,
        imageUrl: "assets/images/exclusive.png",
        type: "Casa de praia",
        isNew: false,
        title: "Canoa Quebrada, Aracati-CE",
        area: 150,
        bedrooms: 4,
        suites: 1,
        parking: 4,
        price: 6000,
        functionality: "Locação",
        description: "Casa de praia exclusiva em Canoa Quebrada, Aracati-CE, com 4 quartos, 1 suíte e 4 vagas de garagem. Perfeita para relaxar e aproveitar as belezas naturais da região."
    },
    {
        id: 96225,
        imageUrl: "assets/images/joao_pessoa.jpg",
        type: "Apartamento",
        isNew: false,
        title: "Altiplano, João Pessoa-PB",
        area: 260,
        bedrooms: 30,
        suites: 15,
        parking: 25,
        price: 7500,
        functionality: "Locação",
        description: "Espaçoso apartamento em Altiplano, João Pessoa-PB, com 30 quartos, 15 suítes e 25 vagas de garagem. Ideal para grandes famílias ou negócios que necessitam de amplo espaço."
    },
    {
        id: 96226,
        imageUrl: "assets/images/natal.jpg",
        type: "Casa",
        isNew: false,
        title: "Ponta Negra, Natal-RN",
        area: 200,
        bedrooms: 4,
        suites: 2,
        parking: 9,
        price: 6000,
        functionality: "Locação",
        description: "Casa moderna em Ponta Negra, Natal-RN, com 4 quartos, 2 suítes e 9 vagas de garagem. Localização privilegiada próxima à praia, perfeita para quem busca conforto e lazer."
    },
    {
        id: 96227,
        imageUrl: "assets/images/recife.jpg",
        type: "Apartamento",
        isNew: false,
        title: "Boa Viagem, Recife-PE",
        area: 340,
        bedrooms: 80,
        suites: 40,
        parking: 75,
        price: 12000,
        functionality: "Compra",
        description: "Exclusivo apartamento em Boa Viagem, Recife-PE, com 80 quartos, 40 suítes e 75 vagas de garagem. Uma verdadeira obra-prima arquitetônica, ideal para quem busca luxo e espaço em uma das áreas mais nobres da cidade."
    }
  ]   

  getPropertyById(id: number) {
    return this.properties.find(property => property.id === id);
  }
}