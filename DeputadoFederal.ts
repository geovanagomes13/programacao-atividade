import { Politico } from "./Politico";

export class DeputadoFederal extends Politico {
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        bancada: string
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.bancada = bancada;
    }

    public exercerMandato(): string {
        return "O Deputado Federal legisla sobre o código penal, código tributário e leis trabalhistas e fiscaliza o Presidente.";
    }

    public votarPEC(): string {
        return "Votar PECs da Constituição Federal.";
    }

    public criarCPI(): string {
        return "Criar uma CPI nacional.";
    }

    public votarPPA(): string {
        return "Votar o PPA nacional.";
    }

    public votarLDO(): string {
        return "Votar a LDO nacional.";
    }

    public votarLOA(): string {
        return "Votar a LOA nacional.";
    }

    public proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }
}