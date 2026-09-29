import { Presidente } from "./Presidente";
import { Governador } from "./Governador";
import { DeputadoEstadual } from "./DeputadoEstadual";
import { DeputadoFederal } from "./DeputadoFederal";
import { Senador } from "./Senador";

// PRESIDENTE


const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Brasília - DF",
    0,
    ["Projeto 1", "Projeto 2"],
    20
);

// GOVERNADORES

const governadorPernambuco = new Governador(
    "Raquel Lyra",
    "PSD",
    "Palácio do Campo das Princesas",
    "Recife - PE",
    0,
    ["Projeto estadual 1"],
    10,
    "Pernambuco"
);

const governadorSaoPaulo = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    "Palácio dos Bandeirantes",
    "São Paulo - SP",
    0,
    ["Projeto estadual 2"],
    10,
    "São Paulo"
);

// DEPUTADOS ESTADUAIS DE PERNAMBUCO

const deputadoEstadual1 = new DeputadoEstadual(
    "Cayo Albino",
    "PSB",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 1"],
    "Pernambuco",
    ["Comissão de Assuntos Municipais"]
);

const deputadoEstadual2 = new DeputadoEstadual(
    "Rosa Amorim",
    "PT",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 2"],
    "Pernambuco",
    ["Comissão de Cidadania"]
);

const deputadoEstadual3 = new DeputadoEstadual(
    "Renato Antunes",
    "PL",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 3"],
    "Pernambuco",
    ["Comissão de Administração Pública"]
);

// DEPUTADOS ESTADUAIS DE SÃO PAULO

const deputadoEstadualSP1 = new DeputadoEstadual(
    "Caio França",
    "PSB",
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    0,
    ["Projeto estadual 4"],
    "São Paulo",
    ["Comissão de Educação"]
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Carlos Giannazi",
    "PSOL",
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    0,
    ["Projeto estadual 5"],
    "São Paulo",
    ["Comissão de Educação"]
);

// DEPUTADOS FEDERAIS DE PERNAMBUCO

const deputadoFederal1 = new DeputadoFederal(
    "Pedro Campos",
    "PSB",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 1"],
    "Bancada do PSB"
);

const deputadoFederal2 = new DeputadoFederal(
    "Clarissa Tércio",
    "PP",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 2"],
    "Bancada do PP"
);

const deputadoFederal3 = new DeputadoFederal(
    "Fernando Monteiro",
    "PSD",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 3"],
    "Bancada do PSD"
);

// DEPUTADOS FEDERAIS DE SÃO PAULO

const deputadoFederalSP1 = new DeputadoFederal(
    "Tabata Amaral",
    "PSB",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 4"],
    "Bancada do PSB"
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Marcos Pereira",
    "Republicanos",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 5"],
    "Bancada do Republicanos"
);

// SENADORES DE PERNAMBUCO

const senador1 = new Senador(
    "Fernando Dueire",
    "MDB",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto federal 1"],
    "Pernambuco",
    2019
);

const senador2 = new Senador(
    "Humberto Costa",
    "PT",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto federal 2"],
    "Pernambuco",
    2019
);

// SENADOR DE OUTRO ESTADO

const senador3 = new Senador(
    "Marcos Pontes",
    "PL",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto federal 3"],
    "São Paulo",
    2022
);


// TESTANDO O POLIMORFISMO

console.log(presidente.exercerMandato());

console.log(governadorPernambuco.exercerMandato());

console.log(deputadoEstadual1.exercerMandato());

console.log(deputadoFederal1.exercerMandato());

console.log(senador1.exercerMandato());


// TESTANDO OS MÉTODOS ESPECÍFICOS

console.log(presidente.nomearMinistro());

console.log(governadorPernambuco.gerirPoliciaMilitar());

console.log(deputadoEstadual1.criarCPI());

console.log(deputadoFederal1.votarPEC());

console.log(senador1.aprovarAutoridades());


console.log("\n--- DADOS DO PRESIDENTE ---");
console.log("Nome:", presidente.getNome());
console.log("Partido:", presidente.getPartido());
console.log("Esfera:", presidente.getEsfera());
console.log("Poder:", presidente.getPoder());
console.log("Local de trabalho:", presidente.getLocalTrabalho());
console.log("Endereço:", presidente.getEnderecoTrabalho());
console.log("Remuneração:", presidente.getRemuneracao());
console.log("Projetos:", presidente.getProjetos());